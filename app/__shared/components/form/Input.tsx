import { FC, ReactElement } from "react";

import { FormInputsType } from "@/app/forms/config";
import { InputErrorIcon } from "../../icons/InputErrorIcon";
import clsx from "clsx";
import { useFormContext } from "./Form";

type InputProps = FC<{
  name: FormInputsType;
  id?: string;
  placeholder?: string;
  className?: string;
  isHostedField?: boolean;
  containerClassName?: string;
  prepend?: ReactElement<any, any>;
}>;

export const Input: InputProps = ({
  id,
  isHostedField,
  name,
  placeholder,
  prepend,
  className,
  containerClassName,
}) => {
  const { formInput, inputValidationErrors, formStatus, updateInput } =
    useFormContext(name);
  const hasErrors = !!inputValidationErrors?.length && formInput?.isTouched;

  return (
    <div className={clsx("relative", containerClassName)}>
      <div className="relative">
        {isHostedField ? (
          <div
            id={id || name}
            className={clsx(
              "w-full rounded-md border px-4 py-3 text-sm shadow-sm focus:z-10 border-gray-200",
              {
                "outline-1 border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-1":
                  hasErrors,
                "outline-none focus:border-blue-500 focus:ring-blue-500":
                  !hasErrors,
              },
              className
            )}
          />
        ) : (
          <input
            type="text"
            id={id || name}
            name={name}
            disabled={formStatus?.isLoading}
            className={clsx(
              "w-full rounded-md border px-4 py-3 text-sm shadow-sm focus:z-10 border-gray-200",
              {
                "outline-1 border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-1":
                  hasErrors,
                "outline-none focus:border-blue-500 focus:ring-blue-500":
                  !hasErrors,
              },
              className
            )}
            placeholder={placeholder}
            value={formInput?.value}
            onChange={({ target: { value } }) =>
              updateInput({ inputId: name, value })
            }
          />
        )}
        {!!prepend && prepend}
        {hasErrors && (
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 flex items-center pr-3">
            <InputErrorIcon />
          </div>
        )}
      </div>
      {hasErrors && (
        <div
          className="mt-2 text-xs text-red-600"
          key={Object.keys(inputValidationErrors[0])[0]}
        >
          {Object.values(inputValidationErrors[0])[0]}
        </div>
      )}
    </div>
  );
};
