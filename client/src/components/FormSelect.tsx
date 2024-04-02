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
};

const FormSelect = ({
  name,
  label,
  defaultValue,
  options,
  layoutClass,
}: SelectInputProps) => {
  return (
    <div className={twMerge(`mb-2 ${layoutClass}`)}>
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
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
