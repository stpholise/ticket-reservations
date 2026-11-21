
import { Field, ErrorMessage } from "formik";

interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>
        {required && <span className="text-red-500">*</span>} {label}
      </label>

      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="outline-none border border-gray-300 rounded-md p-2"
      />

      <ErrorMessage
        name={name}
        component="p"
        className="text-sm text-red-500"
      />
    </div>
  );
};

export default FormInput;
