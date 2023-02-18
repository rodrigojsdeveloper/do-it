import { FieldValues, UseFormRegister } from "react-hook-form";
import { Container } from "./style";

interface InputProps {
  label: string;
  message: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  error?: any;
  required?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  disabled?: boolean;
  src: string;
  alt: string;
}

const Input = ({
  label,
  message,
  type,
  name,
  register,
  autoComplete,
  error,
  placeholder,
  required,
  onChange,
  value,
  disabled,
  src,
  alt,
}: InputProps) => {
  return (
    <Container>
      <label>{label}</label>

      <div>
        <div>
          <img src={src} alt={alt} />

          <input
            value={value}
            type={type}
            {...register(name)}
            autoComplete={autoComplete}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            disabled={disabled}
          />
        </div>

        <p>{!!error ? error : message}</p>
      </div>
    </Container>
  );
};

export { Input };
