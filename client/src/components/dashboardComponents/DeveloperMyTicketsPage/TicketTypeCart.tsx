import { Separator } from '@/components/ui/separator';
import { type TicketResponse } from '@/utils';
import { Badge } from '@/components/ui/badge';
import DeleteDevTicket from './DeleteDevTicket';
import day from 'dayjs';
import EditDevTicket from './EditDevTicket';
import TicketDetails from './TicketDetails';

type TicketTypeCartProps = {
  ticket: TicketResponse;
};

const TicketTypeCart = ({ ticket }: TicketTypeCartProps) => {
  const { _id, title, ticketType, priority, status, createdAt } = ticket;

  let textColor = '';
  let bgColor = '';
  let borderColor = '';
  let secondTextColor = '';
  switch (ticketType) {
    case 'feature':
      textColor = 'text-indigo-50';
      bgColor = 'bg-indigo-700';
      borderColor = 'border-indigo-700';
      secondTextColor = 'text-indigo-700';
      break;
    case 'improvement':
      textColor = 'text-[#E1FCF8]';
      bgColor = 'bg-[#099AA4]';
      borderColor = 'border-[#099AA4]';
      secondTextColor = 'text-[#099AA4]';
      break;
    case 'security':
      textColor = 'text-[#FFFBEA]';
      bgColor = 'bg-[#DE911D]';
      borderColor = 'border-[#DE911D]';
      secondTextColor = 'text-[#DE911D]';
      break;
    case 'bug':
      textColor = 'text-[#FFE3E3]';
      bgColor = 'bg-[#AB091E]';
      borderColor = 'border-[#AB091E]';
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
  const date = day(createdAt).format('D MMM YYYY');
  return (
    <article className={`w-full p-2 rounded-sm ${bgColor} bg-opacity-10`}>
      <header className="flex justify-between items-center">
        <h1 className={`capitalize ${secondTextColor} font-semibold`}>
          {title}
        </h1>
        <TicketDetails
          ticket={ticket}
          secondTextColor={secondTextColor}
          badgeBg={badgeBg}
          badgeText={badgeText}
          bgColor={bgColor}
        />
      </header>
      <Separator className={`${bgColor} bg-opacity-15`} />
      <div className="w-full py-2">
        <div className="flex gap-1">
          <Badge
            className={`rounded-sm ${badgeBg} hover:${badgeBg} ${badgeText}`}
          >
            {priority}
          </Badge>
          <Badge
            variant="outline"
            className={`rounded-sm border ${borderColor}`}
          >
            {status}
          </Badge>
        </div>
      </div>
      <p className={` font-light text-muted-foreground`}>Created at:</p>
      <h1>{date}</h1>
      <footer className="flex items-center justify-end mt-2 gap-2">
        <EditDevTicket
          ticket={ticket}
          textColor={textColor}
          bgColor={bgColor}
        />
        <DeleteDevTicket
          id={_id}
          bgColor={bgColor}
          secondTextColor={secondTextColor}
        />
      </footer>
    </article>
  );
};
export default TicketTypeCart;
