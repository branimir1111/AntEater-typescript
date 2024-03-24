import { Input } from './ui/input';
import { Label } from './ui/label';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  labelClass?: string;
  inputClass?: string;
};

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  labelClass,
  inputClass,
}: FormInputProps) => {
  return (
    <div className="w-full mb-2">
      <Label htmlFor={name} className={`capitalize ${labelClass}`}>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`${inputClass}`}
      />
    </div>
  );
};

export default FormInput;
