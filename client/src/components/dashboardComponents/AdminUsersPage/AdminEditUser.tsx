import { type AdminUser } from '@/utils';
import { Form } from 'react-router-dom';
import { FormInput, SubmitBtn, FormSelect } from '@/components';
import { FilePenLine } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type AdminEditUserProps = {
  user: AdminUser;
};

const AdminEditUser = ({ user }: AdminEditUserProps) => {
  const { _id, firstName, lastName, email, role } = user;
  const roleOptions = ['developer', 'projectmanager'];
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger
              asChild
              aria-expanded={true}
              className="cursor-pointer w-5"
            >
              <FilePenLine />
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit User</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle className="text-indigo-500">Edit User</DialogTitle>
          <DialogDescription>
            Edit user here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form
          method="post"
          className="w-full grid place-items-center"
          encType="multipart/form-data"
          action={`/dashboard/admin-users/edit-user/${_id}`}
        >
          <FormInput
            type="text"
            name="firstName"
            label="First name"
            defaultValue={firstName}
            inputClass="bg-input"
          />
          <FormInput
            type="text"
            name="lastName"
            label="Last name"
            defaultValue={lastName}
            inputClass="bg-input"
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            defaultValue={email}
            inputClass="bg-input"
          />
          <FormSelect
            name="role"
            label="Role"
            layoutClass="w-full"
            options={roleOptions}
            defaultValue={role}
          />
          <FormInput
            type="file"
            name="avatar"
            label="Select picture ( max 1 MB )"
            inputClass="bg-input"
          />
          <SubmitBtn text="Confirm" className="w-full uppercase sm:mt-2" />
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AdminEditUser;
