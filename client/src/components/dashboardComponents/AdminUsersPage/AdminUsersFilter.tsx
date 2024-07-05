import { useLoaderData, Form, Link } from 'react-router-dom';
import { FormSelect, SubmitBtn } from '@/components';
import { usersLimitFilter, usersSortFilter } from '@/utils';
import { Button } from '@/components/ui/button';

type allAdminUsersQueryProps = {
  sort: string;
  limit: string;
  page: string | number;
};

type SearchParamsProps = {
  searchParams: allAdminUsersQueryProps;
};

const AdminUsersFilter = () => {
  const { searchParams } = useLoaderData() as SearchParamsProps;
  const { sort, limit } = searchParams;
  return (
    <Form className="grid break7:grid-cols-2 break7:gap-x-4 break13:grid-cols-3 break18:grid-cols-6">
      <FormSelect
        name="sort"
        label="Sort"
        options={usersSortFilter}
        layoutClass="w-full"
        defaultValue={sort}
      />
      <FormSelect
        name="limit"
        label="limit"
        options={usersLimitFilter}
        layoutClass="w-full"
        defaultValue={limit}
      />
      <SubmitBtn
        text="search"
        className="w-full uppercase self-end mt-4 break13:mt-0 break13:mb-2"
      ></SubmitBtn>
      <Link
        to="/dashboard/admin-users"
        className="self-end mt-4 break13:mt-0 break13:mb-2"
      >
        <Button variant="outline" className="w-full text-md">
          Reset
        </Button>
      </Link>
    </Form>
  );
};
export default AdminUsersFilter;
