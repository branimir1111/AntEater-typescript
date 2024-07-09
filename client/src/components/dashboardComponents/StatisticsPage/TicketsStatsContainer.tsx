import {
  TicketsStatsTypePieChart,
  TicketsStatsPriorityPieChart,
  TicketsStatsStatusPieChart,
} from '@/components';

type TicketTypeStatus = {
  ticketType: string;
  tickets: number;
};
type TicketPriorityStatus = {
  priority: string;
  tickets: number;
};
type TicketStatus = {
  status: string;
  tickets: number;
};

type TasksStatsContainerProps = {
  ticketsByType: TicketTypeStatus[];
  ticketsByPriority: TicketPriorityStatus[];
  ticketsByStatus: TicketStatus[];
};

const TicketsStatsContainer = ({
  ticketsByType,
  ticketsByPriority,
  ticketsByStatus,
}: TasksStatsContainerProps) => {
  return (
    <div className="mt-4 grid gap-2 break8:grid-cols-2 break13:grid-cols-3">
      <div>
        <TicketsStatsTypePieChart ticketsByType={ticketsByType} />
      </div>
      <div>
        <TicketsStatsPriorityPieChart ticketsByPriority={ticketsByPriority} />
      </div>
      <div className="break8:col-span-2 break13:col-span-1">
        <TicketsStatsStatusPieChart ticketsByStatus={ticketsByStatus} />
      </div>
    </div>
  );
};
export default TicketsStatsContainer;
