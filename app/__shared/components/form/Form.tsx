import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from "react";
import { FormInputsType, FormNameType } from "@/app/forms/config";

import { api } from "../../utils/trpc/client";
import { useCheckoutStore } from "@/app/checkout/store";
import { useFormStore } from "@/app/forms/store";

export const FormContext = createContext<{ formName?: FormNameType }>({});

export const Form: FC<PropsWithChildren & { name: FormNameType }> = ({
  name,
  children,
}) => {
  return (
    <FormContext.Provider value={{ formName: name }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (inputName?: FormInputsType) => {
  let { formName } = useContext(FormContext);
  const { braintreeClient } = useCheckoutStore(["braintreeClient"]);
  const { mutate, isError, isIdle, isLoading, isSuccess, data } =
    api?.[formName || "checkout"]?.formSubmit.useMutation();
  const {
    submitForm,
    formsStatus,
    updateInput,
    updateFormValidity,
    setFormStatus,
    forms,
  } = useFormStore([
    "updateInput",
    "updateFormValidity",
    "submitForm",
    "setFormStatus",
    "forms",
    "formsStatus",
  ]);

  if (!formName) formName = Object.keys(forms)[0] as FormNameType;
  const form = forms?.[formName];
  const formValues = form?.inputs;
  const validationErrors = form?.validationErrors;
  useEffect(
    () => updateFormValidity({ formName }),
    [formName, updateFormValidity]
  );

  useEffect(() => {
    setFormStatus({
      formName,
      payload: {
        isError,
        isIdle,
        isLoading,
        isSuccess,
        data,
      },
    });
  }, [isError, isIdle, isLoading, isSuccess, data, formName, setFormStatus]);  

  const onSubmit = async () => {
    submitForm({
      formName,
      payload: { braintreeClient, mutate },
    });
  };

  return {
    formValues,
    isValid: form?.isValid,
    formStatus: formsStatus[formName],
    isTouched: form.isTouched,
    formInput: inputName ? formValues?.[inputName] : null,
    inputValidationErrors: inputName ? validationErrors?.[inputName] : [],
    formValidationErrors: validationErrors,
    submitForm: onSubmit,
    updateInput: ({
      inputId,
      value,
    }: {
      inputId: FormInputsType;
      value: string;
    }) => updateInput({ formName, inputId, value }),
  };
};
