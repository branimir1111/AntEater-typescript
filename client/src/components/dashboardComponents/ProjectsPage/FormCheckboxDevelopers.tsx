import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

type FormCheckboxProps = {
  _id: string;
  firstName: string;
  lastName: string;
  name: string;
  label?: string;
  defaultValue?: string;
};

const FormCheckboxDevelopers = ({
  _id,
  firstName,
  lastName,
  name,
  label,
  defaultValue,
}: FormCheckboxProps) => {
  const devData = _id;
  const devName = firstName + ' ' + lastName;
  const defaultChecked = defaultValue === 'on' ? true : false;

  return (
    <div className="mb-2 flex gap-4 pl-2">
      <Checkbox
        id={name}
        name={name}
        defaultChecked={defaultChecked}
        value={devData}
        className="border-border bg-input text-foreground"
      />
      <Label htmlFor={name} className="capitalize">
        {label || devName}
      </Label>
    </div>
  );
};
export default FormCheckboxDevelopers;
