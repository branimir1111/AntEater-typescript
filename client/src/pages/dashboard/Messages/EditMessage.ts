import { QueryClient } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';
import { ActionFunction, redirect } from 'react-router-dom';

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.patch(
        `/update-message/${params.id}`,
        data
      );
      queryClient.invalidateQueries();
      toast({ description: response.data.msg });
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Update message failed';
      toast({ description: errorMsg });
    }

    return redirect('/dashboard/messages');

    return null;
  };
