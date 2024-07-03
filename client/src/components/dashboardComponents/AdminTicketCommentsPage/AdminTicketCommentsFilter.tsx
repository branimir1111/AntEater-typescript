import { useLoaderData, Form, Link } from 'react-router-dom';
import { FormSelect, SubmitBtn } from '@/components';
import { Button } from '@/components/ui/button';
import { ticketSortFilterSecond, ticketLimitFilterSecond } from '@/utils';

type CommentsTicketsQueryParams = {
  sort: string;
  limit: string;
  page: string | number;
};

type SearchParamsType = {
  searchParams: CommentsTicketsQueryParams;
};

const AdminTicketCommentsFilter = () => {
  const { searchParams } = useLoaderData() as SearchParamsType;
  const { sort, limit } = searchParams;
  return (
    <Form className="grid break7:grid-cols-2 break7:gap-x-4 break13:grid-cols-3 break18:grid-cols-6">
      <FormSelect
        name="sort"
        label="Sort"
        options={ticketSortFilterSecond}
        layoutClass="w-full"
        defaultValue={sort}
      />
      <FormSelect
        name="limit"
        label="limit"
        options={ticketLimitFilterSecond}
        layoutClass="w-full"
        defaultValue={limit}
      />
      <SubmitBtn
        text="search"
        className="w-full uppercase self-end mt-4 break13:mt-0 break13:mb-2"
      ></SubmitBtn>
      <Link
        to="/dashboard/admin-ticket-comments"
        className="self-end mt-4 break13:mt-0 break13:mb-2"
      >
        <Button variant="outline" className="w-full text-md">
          Reset
        </Button>
      </Link>
    </Form>
  );
};
export default AdminTicketCommentsFilter;
