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
import { customFetch } from '@/utils';
import { AxiosResponse, AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';

type DeleteCommentTicketProps = {
  id: string;
};

const DeleteCommentTicket = ({ id }: DeleteCommentTicketProps) => {
  const queryClient = useQueryClient();

  const handleDeleteCommentTicket = async () => {
    try {
      const response: AxiosResponse = await customFetch.delete(
        `/delete-ticket-comment/${id}`
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
            comment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteCommentTicket}
            className={`bg-[#CF1124] hover:bg-[#CF1124] hover:bg-opacity-80 `}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteCommentTicket;
