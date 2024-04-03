import { Input } from './ui/input';
import { Label } from './ui/label';
import { twMerge } from 'tailwind-merge';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  layoutClass?: string;
  labelClass?: string;
  inputClass?: string;
  placeholder?: string;
};

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  layoutClass,
  labelClass,
  inputClass,
  placeholder,
}: FormInputProps) => {
  return (
    <div className={twMerge(`w-full mb-2 ${layoutClass}`)}>
      <Label htmlFor={name} className={`capitalize ${labelClass}`}>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`${inputClass}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
