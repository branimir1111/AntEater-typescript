import { type TicketResponse, type ProjectResponse, ticketType } from '@/utils';
import TicketTypePillar from './TicketTypePillar';

type DevTicketsResponse = {
  numOfTickets: number;
  devTickets: TicketResponse[];
};

type DevTicketsContainerProps = {
  ticketsResponse: DevTicketsResponse;
  projectsList: ProjectResponse[];
};

const DevTicketsContainer = ({
  ticketsResponse,
  projectsList,
}: DevTicketsContainerProps) => {
  const { numOfTickets, devTickets } = ticketsResponse;
  return (
    <section className="w-full py-4">
      <h1 className="text-base mb-4 text-muted-foreground">
        You are assigned to {numOfTickets} ticket{numOfTickets > 1 ? 's' : null}
      </h1>
      <div className="w-full grid gap-3 break6:grid-cols-2 break12:grid-cols-3 break15:grid-cols-4">
        {ticketType.map((singleType) => {
          const filteredTickets = devTickets.filter(
            (devTicket) => devTicket.ticketType === singleType
          );
          return (
            <TicketTypePillar
              key={singleType}
              type={singleType}
              filteredTickets={filteredTickets}
              projectsList={projectsList}
            />
          );
        })}
      </div>
    </section>
  );
};
export default DevTicketsContainer;
