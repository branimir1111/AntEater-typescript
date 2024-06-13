import { QueryClient } from '@tanstack/react-query';
import { ActionFunction, redirect } from 'react-router-dom';
import { customFetch } from '@/utils';
import { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request, params }) => {
    type EntryData = {
      [k: string]: FormDataEntryValue | string[];
    };
    const formData = await request.formData();
    const data: EntryData = Object.fromEntries(formData);

    let newTeamMembers: string[] = [];
    for (const propertyName in data) {
      if (propertyName.startsWith('teamMembers')) {
        newTeamMembers = [...newTeamMembers, data[propertyName] as string];
        delete data[propertyName];
      }
    }

    data['teamMembers'] = newTeamMembers;

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
