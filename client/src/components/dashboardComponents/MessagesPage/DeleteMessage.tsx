import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { customFetch } from '@/utils';
import { AxiosResponse, AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';
import { useQueryClient } from '@tanstack/react-query';

type DeleteMessageProps = {
  id: string;
};

const DeleteMessage = ({ id }: DeleteMessageProps) => {
  const queryClient = useQueryClient();

  const handleDeleteMessage = async () => {
    try {
      const response: AxiosResponse = await customFetch.delete(
        `/delete-message/${id}`
      );
      queryClient.invalidateQueries();
      toast({ description: response.data.msg });
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Delete Failed';
      toast({ description: errorMsg });
      return null;
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger
        asChild
        className="cursor-pointer w-5 bg-[#CF1124] hover:bg-[#CF1124] hover:bg-opacity-80 text-[#FFE3E3] hover:text-[#FFE3E3]"
      >
        <Button variant="outline" size="lg">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-background-first">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            message.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteMessage}
            className={`bg-[#CF1124] hover:bg-[#CF1124] hover:bg-opacity-80 `}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteMessage;
