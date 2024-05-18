import { type TicketResponse } from '@/utils';
import {
  Table,
  TableHeader,
  TableCaption,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import ComplexPagination from '../ComplexPagination';
import { Button } from '@/components/ui/button';
import { SingleTicketDetails } from '@/components';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

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
  return (
    <div className="w-full bg-background grid p-4 border rounded-sm">
      <h1 className="text-lg mb-2 text-[#0FB5BA] font-semibold">
        {numOfTickets} tickets founded
      </h1>
      <Separator className="bg-[#0FB5BA]" />
      <Table>
        <TableCaption>A list of your tickets</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#0FB5BA] font-bold">Title</TableHead>
            <TableHead className="max-break5:hidden text-[#0FB5BA] font-bold">
              Type
            </TableHead>
            <TableHead className="max-break8:hidden text-[#0FB5BA] font-bold">
              Priority
            </TableHead>
            <TableHead className="max-break14:hidden text-[#0FB5BA] font-bold">
              Status
            </TableHead>
            <TableHead className="text-[#0FB5BA] font-bold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allTickets.map((ticket) => {
            const { _id, title, ticketType, priority, status } = ticket;

            let secondTextColor = '';
            switch (ticketType) {
              case 'feature':
                secondTextColor = 'text-indigo-700';
                break;
              case 'improvement':
                secondTextColor = 'text-[#099AA4]';
                break;
              case 'security':
                secondTextColor = 'text-[#DE911D]';
                break;
              case 'bug':
                secondTextColor = 'text-[#AB091E]';
                break;
            }

            let badgeBg = '';
            let badgeText = '';
            switch (priority) {
              case 'low':
                badgeBg = 'bg-[#C1FEF6]';
                badgeText = 'text-[#07818F]';
                break;
              case 'medium':
                badgeBg = 'bg-[#FFF3C4]';
                badgeText = 'text-[#B44D12]';
                break;
              case 'high':
                badgeBg = 'bg-[#FFB8D2]';
                badgeText = 'text-[#870557]';
                break;
              case 'urgent':
                badgeBg = 'bg-[#A30664]';
                badgeText = 'text-[#FFE3EC]';
                break;
            }

            return (
              <TableRow
                key={_id}
                className={`${
                  ticketDetails._id === _id
                    ? 'bg-[#51CA58] bg-opacity-15 hover:bg-[#51CA58] hover:bg-opacity-20'
                    : ''
                } `}
              >
                <TableCell
                  className={`capitalize ${
                    ticketDetails._id === _id ? 'text-[#51CA58]' : ''
                  }`}
                >
                  {title}
                </TableCell>
                <TableCell className={`max-break5:hidden ${secondTextColor}`}>
                  {ticketType}
                </TableCell>
                <TableCell className="max-break8:hidden">
                  <Badge
                    className={`${badgeBg} ${badgeText} hover:${badgeBg} rounded-md`}
                  >
                    {priority}
                  </Badge>
                </TableCell>
                <TableCell className="max-break14:hidden">{status}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      setTicketDetails(ticket);
                    }}
                    className="bg-[#0FB5BA] hover:bg-[#0FB5BA] hover:bg-opacity-90"
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Separator className="bg-[#0FB5BA] mt-2" />
      <ComplexPagination numOfPages={numOfPages} currentPage={currentPage} />
      <SingleTicketDetails ticketDetails={ticketDetails} />
    </div>
  );
};
export default TicketsContainer;
