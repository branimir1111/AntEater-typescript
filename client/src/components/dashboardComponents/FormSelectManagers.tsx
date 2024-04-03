import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Label } from '../ui/label';
import { twMerge } from 'tailwind-merge';

type PMS = {
  _id: string;
  firstName: string;
  lastName: string;
};

type SelectInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: PMS[];
  layoutClass?: string;
};

const FormSelectManagers = ({
  name,
  label,
  options,
  layoutClass,
}: SelectInputProps) => {
  const firstPms = JSON.stringify(options[0]);

  return (
    <div className={twMerge(`mb-2 ${layoutClass}`)}>
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={firstPms} name={name}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => {
            const { _id, firstName, lastName } = item;
            const pmsName = firstName + ' ' + lastName;
            const selectedPms = JSON.stringify({ _id, firstName, lastName });
            return (
              <SelectItem key={_id} value={selectedPms}>
                {pmsName}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default FormSelectManagers;
