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

type DeleteDevTicketProps = {
  id: string;
  bgColor: string;
  secondTextColor: string;
};

const DeleteDevTicket = ({
  id,
  bgColor,
  secondTextColor,
}: DeleteDevTicketProps) => {
  const queryClient = useQueryClient();

  const handleDeleteTicket = async () => {
    try {
      const response: AxiosResponse = await customFetch.delete(
        `/delete-ticket/${id}`
      );
      queryClient.invalidateQueries({ queryKey: ['all-dev-tickets'] });
      queryClient.invalidateQueries({ queryKey: ['all-tickets'] });
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
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`${bgColor} bg-opacity-10 hover:${bgColor} hover:bg-opacity-15 ${secondTextColor} hover:${secondTextColor}`}
        >
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            ticket.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteTicket}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteDevTicket;
