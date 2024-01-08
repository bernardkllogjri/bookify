import { Button } from "./Button";
import { Form } from "./Form";
import { Input } from "./Input";

type FormType = typeof Form & { 
    Button: typeof Button;
    Input: typeof Input;
}

(Form as FormType).Button = Button;
(Form as FormType).Input = Input;

export default Form as FormType;
