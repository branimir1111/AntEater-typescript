import { useAppSelector } from '@/utils';
import { QueryClient } from '@tanstack/react-query';
import { redirect, Form, ActionFunction } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import FormInput from '@/components/FormInput';
import { Textarea } from '@/components/ui/textarea';
import SubmitBtn from '@/components/SubmitBtn';
import { customFetch } from '@/utils';
import { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post('/create-message', data);
      queryClient.invalidateQueries();
      toast({ description: response.data.msg });
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Send message failed';
      toast({ description: errorMsg });
    }

    return redirect('/dashboard/messages');
  };

type AddNewMessageProps = {
  sendToUserId: string;
};

const AddNewMessage = ({ sendToUserId }: AddNewMessageProps) => {
  const user = useAppSelector((state) => state.userState.user);
  const sendByUserId = user?._id;

  return (
    <Dialog>
      <DialogTrigger
        asChild
        aria-expanded={true}
        className="cursor-pointer mb-4"
      >
        <Button>New message</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle>Add Message</DialogTitle>
          <DialogDescription>
            Add new message here. Click send when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form method="post">
          <FormInput
            name="senderId"
            type="hidden"
            defaultValue={`${sendByUserId}`}
          />
          <FormInput
            name="receiverId"
            type="hidden"
            defaultValue={sendToUserId}
          />
          <Textarea name="text" placeholder="Type here..."></Textarea>
          <DialogFooter className="mt-4">
            <div className="flex justify-end mt-2">
              <SubmitBtn text="Send" />
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AddNewMessage;
