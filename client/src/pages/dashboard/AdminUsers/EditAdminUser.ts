import { QueryClient } from '@tanstack/react-query';
import { redirect, type ActionFunction } from 'react-router-dom';
import { customFetch } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { AxiosError } from 'axios';

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const file = formData.get('avatar') as FormDataEntryValue & {
      size: number;
    };
    if (file && file.size > 1000000) {
      toast({ description: 'Image too large' });
      return null;
    }
    try {
      const response = await customFetch.patch(
        `/update-admin-user/${params.id}`,
        formData
      );
      await queryClient.invalidateQueries();
      toast({ description: response.data.msg });
      return redirect('/dashboard/admin-users');
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Update Failed';
      toast({ description: errorMsg });
      return null;
    }
  };
