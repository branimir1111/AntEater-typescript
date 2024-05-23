import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Eraser } from 'lucide-react';
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

type DeleteDevTaskProps = {
  id: string;
  bgColor: string;
};

const DeleteDevTask = ({ id, bgColor }: DeleteDevTaskProps) => {
  const queryClient = useQueryClient();

  const handleDeleteTask = async () => {
    try {
      const response: AxiosResponse = await customFetch.delete(
        `/delete-task/${id}`
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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <AlertDialogTrigger
              asChild
              className="cursor-pointer w-5 text-[#E12D39]"
            >
              <Eraser />
            </AlertDialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Task</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertDialogContent className="bg-background-first">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteTask}
            className={`${bgColor} hover:${bgColor} hover:bg-opacity-80`}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteDevTask;
