import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from 'react-router-dom';
import { FormInput, SubmitBtn } from '@/components';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const AdminAddNewUser = () => {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        aria-expanded={true}
        className="bg-indigo-400 hover:bg-indigo-300"
      >
        <Button variant="outline">
          <Plus className="w-4 mr-2" />
          Add New User
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle className="text-indigo-500">Create New User</DialogTitle>
          <DialogDescription>
            Create new user here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form method="post" action="/dashboard/admin-users/add-new-user">
          <FormInput name="firstName" type="text" label="First Name" />
          <FormInput name="lastName" type="text" label="Last Name" />
          <FormInput name="email" type="email" label="E-mail" />
          <FormInput name="password" type="password" label="password" />
          <DialogFooter className="mt-4">
            <SubmitBtn text="Save"></SubmitBtn>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AdminAddNewUser;
