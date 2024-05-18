import { type TicketResponse } from '@/utils';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import ComplexPagination from '../ComplexPagination';
import { Button } from '@/components/ui/button';
import { SingleTicketDetails } from '@/components';
import { useState } from 'react';

type TicketsContainerProps = {
  allTickets: TicketResponse[];
  numOfPages: number;
  currentPage: number;
  numOfTickets: number;
};

const TicketsContainer = ({
  allTickets,
  numOfPages,
  currentPage,
  numOfTickets,
}: TicketsContainerProps) => {
  const [ticketDetails, setTicketDetails] = useState(allTickets[0]);
  console.log(ticketDetails);

  // const singleTicket = allTickets.find((ticket) => ticket._id === ticketId);
  return (
    <div className="w-full bg-background grid p-4">
      <h1>{numOfTickets} tickets founded</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="max-break5:hidden">Type</TableHead>
            <TableHead className="max-break8:hidden">Priority</TableHead>
            <TableHead className="max-break14:hidden">Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allTickets.map((ticket) => {
            const { _id, title, ticketType, priority, status } = ticket;

            return (
              <TableRow key={_id}>
                <TableCell>{title}</TableCell>
                <TableCell className="max-break5:hidden">
                  {ticketType}
                </TableCell>
                <TableCell className="max-break8:hidden">{priority}</TableCell>
                <TableCell className="max-break14:hidden">{status}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      setTicketDetails(ticket);
                    }}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ComplexPagination numOfPages={numOfPages} currentPage={currentPage} />
      <SingleTicketDetails ticketDetails={ticketDetails} />
    </div>
  );
};
export default TicketsContainer;
