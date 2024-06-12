import { QueryClient } from '@tanstack/react-query';
import { ActionFunction, redirect } from 'react-router-dom';
import { customFetch } from '@/utils';
import { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.patch(
        `/update-project/${params.id}`,
        data
      );
      queryClient.invalidateQueries();
      toast({ description: response.data.msg });
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Edit Project Failed';
      toast({ description: errorMsg });
    }

    return redirect('/dashboard/manager');
  };
