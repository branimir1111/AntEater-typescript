import { redirect, ActionFunction } from 'react-router-dom';
import { customFetch } from '@/utils';
import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.patch(
        `/update-task/${params.id}`,
        data
      );
      queryClient.invalidateQueries();
      toast({ description: response.data.msg });
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Create Task Failed';
      toast({ description: errorMsg });
    }
    return redirect('/dashboard/my-tasks');
  };
