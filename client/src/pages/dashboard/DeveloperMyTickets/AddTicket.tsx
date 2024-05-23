import { redirect, ActionFunction } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post('/create-ticket', data);
      queryClient.invalidateQueries();
      toast({ description: response.data.msg });
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Create Task Failed';
      toast({ description: errorMsg });
    }
    return redirect('/dashboard/my-tickets');
  };
