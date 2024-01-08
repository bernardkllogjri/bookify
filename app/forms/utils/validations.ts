import { Validator } from "../types";

export const validators: Record<
  Validator,
  ({ value }: { value: string }) => string | undefined
> = {
  required: ({ value }) => (!value ? "Required field" : undefined),
  email: ({ value }) =>
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
      ? "Not a valid email"
      : undefined,
  aNumber: ({ value }) =>
    !/[0-9]/.test(value) ? "Please only enter numbers" : undefined,
  aNonNumber: ({ value }) =>
    !/[^0-9]/.test(value)
      ? "Please only enter non number characters"
      : undefined,
  anUppercaseLetter: ({ value }) =>
    !/[A-Z]/.test(value)
      ? "This input should contain an uppercase characters"
      : undefined,
  aLowercaseLetter: ({ value }) =>
    !/[a-z]/.test(value)
      ? "This input should contain an uppercase characters"
      : undefined,
  aSpace: ({ value }) =>
    !/\s/.test(value) ? "This input should contain a space" : undefined,
};

export const checkIsInValid = (defaultValidators: Validator[], value: string) => {
  return defaultValidators
    .map((validator) => {
      const invalid = validators[validator]?.({ value });
      if (!invalid) return undefined;
      return {
        [validator]: invalid,
      };
    })
    .filter((val) => !!val);
};
