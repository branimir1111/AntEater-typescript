import { Form, LoaderFunction } from 'react-router-dom';
import { FormInput, FormSelect } from '@/components';
import { type QueryClient } from '@tanstack/react-query';
import { customFetch } from '@/utils';

const allDevsQuery = (queryParams) => {
  const { page } = queryParams;
  return {
    queryKey: ['developer', page ?? 1],
    queryFn: () =>
      customFetch('/all-users', {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }): Promise<Response | null | number> => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(allDevsQuery(params));
    const numOfPages = response.data.numOfPages;
    const currentPage = response.data.currentPage;
    const currentDevs = response.data.devs;
    const pms = response.data.pms;
    return { numOfPages, currentPage, params, currentDevs, pms };
  };

const AddNewProjectForm = () => {
  return (
    <div className="w-full p-4">
      <Form method="post" className="w-full grid place-items-center">
        <div className="w-full grid place-items-center break7:grid-cols-2 max-w-3xl gap-4">
          {/* left side form */}
          <div className="w-full">
            <FormInput type="text" name="projectName" label="Project Name" />
            <FormSelect name="projectManager" label="Project Manager" />
          </div>
          {/* right side form */}
          <div>right side</div>
        </div>
        {/* description */}
        <div></div>
      </Form>
    </div>
  );
};
export default AddNewProjectForm;
