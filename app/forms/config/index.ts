import { FormInputs, FormNames, Forms, ValidationErrors } from "../types";

import checkout from "./checkout";

const forms = {
  checkout: checkout,
};

export type FormsType = Forms<typeof forms>;
export type FormNameType = FormNames<typeof forms>;
export type FormInputsType = FormInputs<typeof forms>;
export type ValidationErrorsType = ValidationErrors<typeof forms>

export default forms;
