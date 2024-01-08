import { HostedFields } from "braintree-web";
import { PartialRecord } from "../__shared/types";

interface FormPrimitiveInterface {
  [x: string]: {
    inputs: {
      [y: string]: any;
    };
  };
}

export type Validator =
  | "required"
  | "email"
  | "aNumber"
  | "aNonNumber"
  | "anUppercaseLetter"
  | "aLowercaseLetter"
  | "aSpace";

export type SubmitFnPayload = {
  braintreeClient: HostedFields | null;
  mutate: ({ paymentMethodNonce }: { paymentMethodNonce: string }) => void;
};

export type SubmitFn = ({
  braintreeClient,
  mutate,
}: SubmitFnPayload) => Promise<void>;

export type FormNames<T> = keyof T;
export type FormInputs<T extends FormPrimitiveInterface> =
  keyof T[FormNames<T>]["inputs"];
export type ValidationErrors<T extends FormPrimitiveInterface> = PartialRecord<FormInputs<T>, Record<Validator, string>[]>

export type Forms<T extends FormPrimitiveInterface> = {
  [K in FormNames<T>]: {
    inputs: {
      [P in FormInputs<T>]: {
        valueType: "text" | "mumber";
        value: string;
        isTouched?: boolean;
        defaultValidators: Validator[];
      };
    };
    isTouched?: boolean;
    isValid?: boolean;
    validationErrors?: ValidationErrors<T>;
  };
};
