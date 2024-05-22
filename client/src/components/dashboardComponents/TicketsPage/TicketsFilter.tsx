import { ticketTypeAll, ticketPriorityAll, ticketStatusAll } from '@/utils';
import { Form, useSubmit, useLoaderData, Link } from 'react-router-dom';
import { FormSelect } from '@/components';
import { Separator } from '@/components/ui/separator';

type allTicketsDevQueryProps = {
  ticketType: string;
  priority: string;
  status: string;
  page: string;
};

const TicketsFilter = () => {
  const searchParams = useLoaderData() as allTicketsDevQueryProps;
  const { ticketType, priority, status } = searchParams;

  const submit = useSubmit();

  return (
    <div className="w-full break9:w-80 bg-background rounded-sm p-4 border">
      <h1 className="text-lg mb-2 text-indigo-500 font-semibold">Filter</h1>
      <Separator className="bg-indigo-500" />
      <p className="mt-2 font-normal text-muted-foreground">
        Choose different options
      </p>
      <Form
        onChange={(e) => {
          submit(e.currentTarget);
        }}
        className="w-full mt-2"
      >
        <FormSelect
          name="ticketType"
          label="Type"
          options={ticketTypeAll}
          defaultValue={ticketType}
        />
        <FormSelect
          name="priority"
          label="Priority"
          options={ticketPriorityAll}
          defaultValue={priority}
        />
        <FormSelect
          name="status"
          label="Status"
          options={ticketStatusAll}
          defaultValue={status}
        />
        <Link to="/dashboard/tickets">Reset</Link>
      </Form>
      <div className="w-full mt-4">
        <h1 className="mb-2 font-bold text-muted-foreground">Ticket types</h1>
        <div className="w-full grid gap-2 px-2 py-4 border rounded-sm">
          <div className="w-full flex gap-4">
            <div className=" w-5 h-5 bg-indigo-700"></div>
            <p className="text-indigo-700 font-semibold">Feature</p>
          </div>
          <div className="w-full flex gap-4">
            <div className=" w-5 h-5 bg-[#099AA4]"></div>
            <p className="text-[#099AA4] font-semibold">Improvement</p>
          </div>
          <div className="w-full flex gap-4">
            <div className=" w-5 h-5 bg-[#DE911D]"></div>
            <p className="text-[#DE911D] font-semibold">Security</p>
          </div>
          <div className="w-full flex gap-4">
            <div className=" w-5 h-5 bg-[#AB091E]"></div>
            <p className="text-[#AB091E] font-semibold">Bug</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketsFilter;
