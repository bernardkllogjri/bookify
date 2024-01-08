import formConfigs, {
  FormInputsType,
  FormNameType,
  FormsType,
  ValidationErrorsType,
} from "./config";

import { PartialRecord } from "../__shared/types";
import { SubmitFnPayload } from "./types";
import { checkIsInValid } from "./utils/validations";
import { createStore } from "@/app/__shared/store/config";

type State = {
  forms: FormsType;
  formsStatus: PartialRecord<FormNameType, any>;
};

type Actions = {
  updateInput: ({
    formName,
    inputId,
    value,
  }: {
    formName?: FormNameType;
    inputId: FormInputsType;
    value: string;
  }) => void;
  setInputError: ({
    formName,
    inputId,
    errors,
  }: {
    formName?: FormNameType;
    inputId: FormInputsType;
    errors: { [x: string]: string }[];
  }) => void;
  updateFormValidity: ({ formName }: { formName?: FormNameType }) => void;
  submitForm: ({
    formName,
    payload,
  }: {
    formName?: FormNameType;
    payload: SubmitFnPayload;
  }) => void;
  setFormStatus: ({
    formName,
    payload,
  }: {
    formName?: FormNameType;
    payload: any;
  }) => void;
};

export const useFormStore = createStore<State & Actions>(
  "form-storage",
  (set, get) => ({
    forms: formConfigs as FormsType,
    formsStatus: {},
    updateInput: ({ formName, inputId, value }) => {
      set((state) => {
        if (!formName) return;
        const form = state.forms?.[formName];
        const input = form.inputs?.[inputId];
        input.value = value;
        input.isTouched = true;
        const isInputInvalid = checkIsInValid(
          input.defaultValidators,
          input.value
        );
        form.validationErrors = {
          ...form.validationErrors,
          [inputId]: isInputInvalid,
        };

        const isInValid = Object.keys(form.validationErrors).some(
          (key: string) =>
            !!form.validationErrors?.[key as FormInputsType]?.length
        );

        const isTouched = Object.keys(form.inputs).some(
          (key: string) => !!form.inputs?.[key as FormInputsType]?.isTouched
        );

        form.isTouched = isTouched;
        form.isValid = !isInValid;
      });
    },
    setInputError: ({ formName, inputId, errors }) => {
      set((state) => {
        if (!formName) return;
        const form = state.forms?.[formName];
        form.validationErrors = {
          ...form.validationErrors,
          [inputId]: errors,
        };
        form.isValid = !Object.keys(form.validationErrors).some(
          (key) => !!form?.validationErrors?.[key as FormInputsType]?.length
        );
      });
    },
    updateFormValidity: ({ formName }) => {
      set((state) => {
        if (!formName) return;
        const form = state.forms?.[formName];
        const formInputs = form.inputs;
        const validations: ValidationErrorsType = Object.keys(formInputs)
          .filter(
            (input) =>
              !!formInputs[input as FormInputsType].defaultValidators.length
          )
          .reduce((acc, input) => {
            const formInput = formInputs[input as FormInputsType];
            return {
              ...acc,
              [input]: checkIsInValid(
                formInput.defaultValidators,
                formInput.value
              ),
            };
          }, {});
        form.validationErrors = {
          ...form.validationErrors,
          ...validations,
        };
      });
    },
    submitForm: async ({ formName, payload }) => {
      if (!formName) return;
      get().updateFormValidity({ formName });
      const form = get().forms[formName];
      set((state) => {
        state.forms[formName].isTouched = true;
        Object.keys(state.forms[formName].inputs).forEach((key) => {
          state.forms[formName].inputs[key as FormInputsType].isTouched = true;
        });
      });
      if (form.isValid) {
        switch (formName) {
          case "checkout":
            const tokenizeData = await payload.braintreeClient?.tokenize();
            if (!tokenizeData || !tokenizeData?.nonce) return;
            payload.mutate({ paymentMethodNonce: tokenizeData?.nonce });
            break;
          default:
            break;
        }
      }
    },
    setFormStatus: ({ formName, payload }) => {
      set((state) => {
        if (!formName) return;
        state.formsStatus[formName] = payload;
      });
    },
  }),
  true
);
