import { type TicketResponse } from '@/utils';
import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';

type TicketsContainerProps = {
  allTickets: TicketResponse[];
  numOfPages: number;
  currentPage: number;
};
import ComplexPagination from '../ComplexPagination';

const TicketsContainer = ({
  allTickets,
  numOfPages,
  currentPage,
}: TicketsContainerProps) => {
  return (
    <div className="w-full bg-background grid p-4">
      <h1>tickets founded</h1>
      <Table>
        <TableCaption>A list of your tickets</TableCaption>
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
                <TableCell>Details</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ComplexPagination numOfPages={numOfPages} currentPage={currentPage} />
    </div>
  );
};
export default TicketsContainer;
