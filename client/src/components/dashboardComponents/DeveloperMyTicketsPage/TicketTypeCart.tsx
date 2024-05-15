import { type TicketResponse } from '@/utils';

type TicketTypeCartProps = {
  ticket: TicketResponse;
};

const TicketTypeCart = ({ ticket }: TicketTypeCartProps) => {
  const { title } = ticket;
  return (
    <article>
      <h1>{title}</h1>
    </article>
  );
};
export default TicketTypeCart;
