import { type TicketResponse } from '@/utils';

type SingleTicketDetailsProps = {
  ticketDetails: TicketResponse;
};

const SingleTicketDetails = ({ ticketDetails }: SingleTicketDetailsProps) => {
  const { title } = ticketDetails;
  return <div className="w-full">{title}</div>;
};
export default SingleTicketDetails;
