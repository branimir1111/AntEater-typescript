import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { twMerge } from 'tailwind-merge';

type SelectInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
  layoutClass?: string;
  labelClass?: string;
};

const FormSelect = ({
  name,
  label,
  defaultValue,
  options,
  layoutClass,
  labelClass,
}: SelectInputProps) => {
  return (
    <div className={twMerge(`mb-2 ${layoutClass}`)}>
      <Label htmlFor={name} className={twMerge(`capitalize ${labelClass}`)}>
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name} className="bg-input mt-1">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-input">
          {options.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default FormSelect;
