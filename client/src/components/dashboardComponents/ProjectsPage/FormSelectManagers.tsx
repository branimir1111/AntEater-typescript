import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
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
  const firstPms = options[0]._id;

  return (
    <div className={twMerge(`mb-2 ${layoutClass}`)}>
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={firstPms} name={name}>
        <SelectTrigger id={name} className="bg-input mt-1">
          <SelectValue placeholder={'Pick one...'} />
        </SelectTrigger>
        <SelectContent className="bg-input">
          {options.map((item) => {
            const { _id, firstName, lastName } = item;
            const pmsName = firstName + ' ' + lastName;
            const selectedPms = _id;
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
