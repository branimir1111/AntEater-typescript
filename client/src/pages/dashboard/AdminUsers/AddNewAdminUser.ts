import { redirect, ActionFunction } from 'react-router-dom';
import { customFetch } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { AxiosError } from 'axios';
import { QueryClient } from '@tanstack/react-query';

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post('/register', data);
      toast({ description: response.data.msg });
      queryClient.invalidateQueries();
      return redirect('/dashboard/admin-users');
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Registration Failed';
      toast({ description: errorMsg });
      return null;
    }
  };
