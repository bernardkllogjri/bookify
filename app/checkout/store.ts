import { FormInputsType, FormNameType } from "../forms/config";
import hostedFields, {
  HostedFields,
  HostedFieldsHostedFieldsFieldData,
  HostedFieldsHostedFieldsFieldName,
} from "braintree-web/hosted-fields";

import client from "braintree-web/client";
import { createStore } from "@/app/__shared/store/config";

const cardInputs: Partial<Record<HostedFieldsHostedFieldsFieldName, string>> = {
  cardholderName: "Card holder name is not valid",
  number: "Credit Card number is not valid",
  expirationDate: "Expiration date is not valid",
  cvv: "CVV number is not valid",
};

type State = {
  braintreeClient: HostedFields | null;
};

type Actions = {
  initPaymentProvider: (
    braintreeToken: string,
    setInputError: ({
      formName,
      inputId,
      errors,
    }: {
      formName?: FormNameType;
      inputId: FormInputsType;
      errors: { [x: string]: string }[];
    }) => void
  ) => void;
};

export const useCheckoutStore = createStore<State & Actions>(
  "app-storage",
  (set) => ({
    braintreeClient: null,
    initPaymentProvider: async (braintreeToken, setInputError) => {
      const clientInstance = await client.create({
        authorization: braintreeToken,
      });

      const instance = await hostedFields.create({
        client: clientInstance,
        fields: {
          cardholderName: {
            selector: "#card-holder",
            placeholder: "Your full name here",
          },
          number: {
            selector: "#card-number",
            placeholder: "4111 1111 1111 1111",
          },
          cvv: {
            selector: "#cvv",
            placeholder: "123",
          },
          expirationDate: {
            selector: "#expiration-date",
            placeholder: "MM/YYYY",
          },
        },
      });

      set({ braintreeClient: instance });
  
      const setFieldErrors = (
        emittedBy: HostedFieldsHostedFieldsFieldName,
        field: HostedFieldsHostedFieldsFieldData
      ) => {
        if (field.isValid) {
          setInputError({
            formName: "checkout",
            inputId: emittedBy as FormInputsType,
            errors: [],
          });
        } else {
          setInputError({
            formName: "checkout",
            inputId: emittedBy as FormInputsType,
            errors: [
              {
                invalid: cardInputs[emittedBy] as string,
              },
            ],
          });
        }
      };

      Object.keys(cardInputs).forEach((cardInput) => {
        setFieldErrors(cardInput as HostedFieldsHostedFieldsFieldName, {
          isValid: false,
          container: null as unknown as HTMLElement,
          isFocused: false,
          isEmpty: true,
          isPotentiallyValid: false,
        });
      });

      instance.on("empty", (e) => {
        setFieldErrors(e.emittedBy, e.fields[e.emittedBy]);
      });

      instance.on("validityChange", (e) => {
        setFieldErrors(e.emittedBy, e.fields[e.emittedBy]);
      });
    },
  })
);
