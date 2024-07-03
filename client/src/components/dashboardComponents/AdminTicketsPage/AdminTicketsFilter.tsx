import { useLoaderData, Form, Link } from 'react-router-dom';
import { FormInput, FormSelect, SubmitBtn } from '@/components';
import {
  ticketStatusAll,
  ticketTypeAll,
  ticketPriorityAll,
  ticketSortFilter,
  ticketLimitFilter,
} from '@/utils';
import { Button } from '@/components/ui/button';

type allAdminTicketsQueryParams = {
  search: string;
  ticketType: string;
  priority: string;
  status: string;
  sort: string;
  limit: string;
  page: string | number;
};
type SearchParamsType = {
  searchParams: allAdminTicketsQueryParams;
};

const AdminTicketsFilter = () => {
  const { searchParams } = useLoaderData() as SearchParamsType;
  const { search, ticketType, priority, status, sort, limit } = searchParams;
  return (
    <Form className="grid break7:grid-cols-2 break7:gap-x-4 break13:grid-cols-3 break18:grid-cols-6">
      <FormInput
        name="search"
        type="search"
        label="Search"
        inputClass="bg-input mt-1"
        placeholder="Ticket title..."
        defaultValue={search}
      />
      <FormSelect
        name="taskType"
        label="Type"
        options={ticketTypeAll}
        layoutClass="w-full"
        defaultValue={ticketType}
      />
      <div className="flex gap-4">
        <FormSelect
          name="priority"
          label="Priority"
          options={ticketPriorityAll}
          layoutClass="w-full"
          defaultValue={priority}
        />
        <FormSelect
          name="status"
          label="Status"
          options={ticketStatusAll}
          layoutClass="w-full"
          defaultValue={status}
        />
      </div>
      <div className="flex gap-4">
        <FormSelect
          name="sort"
          label="Sort"
          options={ticketSortFilter}
          layoutClass="w-full"
          defaultValue={sort}
        />
        <FormSelect
          name="limit"
          label="limit"
          options={ticketLimitFilter}
          layoutClass="w-full"
          defaultValue={limit}
        />
      </div>
      <SubmitBtn
        text="search"
        className="w-full uppercase self-end mt-4 break13:mt-0 break13:mb-2"
      ></SubmitBtn>
      <Link
        to="/dashboard/admin-tickets"
        className="self-end mt-4 break13:mt-0 break13:mb-2"
      >
        <Button variant="outline" className="w-full text-md">
          Reset
        </Button>
      </Link>
    </Form>
  );
};
export default AdminTicketsFilter;
