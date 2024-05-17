import { ticketTypeAll, ticketPriorityAll, ticketStatusAll } from '@/utils';
import { Form, useSubmit } from 'react-router-dom';
import { FormSelect } from '@/components';

const TicketsFilter = () => {
  const submit = useSubmit();

  return (
    <div className="w-full break9:w-80 bg-background rounded-sm p-4">
      <h1 className="text-lg mb-2">Filter</h1>
      <Form
        onChange={(e) => {
          submit(e.currentTarget);
        }}
        className="w-full"
      >
        <FormSelect name="ticketType" label="Type" options={ticketTypeAll} />
        <FormSelect
          name="priority"
          label="Priority"
          options={ticketPriorityAll}
        />
        <FormSelect name="status" label="Status" options={ticketStatusAll} />
      </Form>
    </div>
  );
};
export default TicketsFilter;
