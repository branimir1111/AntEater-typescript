import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

type FormCheckboxProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const FormCheckbox = ({ name, label, defaultValue }: FormCheckboxProps) => {
  const defaultChecked = defaultValue === 'on' ? true : false;

  return (
    <div className="mb-2 flex gap-4 pl-2">
      <Checkbox
        id={name}
        name={name}
        defaultChecked={defaultChecked}
        className="border-border bg-slate-100 text-foreground"
      />
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
    </div>
  );
};
export default FormCheckbox;
