import { type TicketResponse, type ProjectResponse } from '@/utils';
import TicketTypeCart from './TicketTypeCart';

type TicketTypePillarProps = {
  type: string;
  filteredTickets: TicketResponse[];
  projectsList: ProjectResponse[];
};

const TicketTypePillar = ({
  type,
  filteredTickets,
  projectsList,
}: TicketTypePillarProps) => {
  let textColor = '';
  let bgColor = '';
  let borderColor = '';
  switch (type) {
    case 'feature':
      textColor = 'text-indigo-50';
      bgColor = 'bg-indigo-700';
      borderColor = 'border-indigo-700';
      break;
    case 'improvement':
      textColor = 'text-[#E1FCF8]';
      bgColor = 'bg-[#099AA4]';
      borderColor = 'border-[#099AA4]';
      break;
    case 'security':
      textColor = 'text-[#FFFBEA]';
      bgColor = 'bg-[#DE911D]';
      borderColor = 'border-[#DE911D]';
      break;
    case 'bug':
      textColor = 'text-[#FFE3E3]';
      bgColor = 'bg-[#AB091E]';
      borderColor = 'border-[#AB091E]';
      break;
  }

  return (
    <div className="w-full flex flex-col">
      <div
        className={`font-bold uppercase w-min h-min px-2 rounded-t-sm ${textColor} ${bgColor}`}
      >
        {type}
      </div>
      <div
        className={`w-full min-h-8 h-full grid place-items-center gap-3 border rounded-tr-sm rounded-b-sm ${borderColor} ${bgColor} bg-opacity-5`}
      >
        {filteredTickets.map((ticket) => {
          return <TicketTypeCart key={ticket._id} ticket={ticket} />;
        })}
      </div>
    </div>
  );
};
export default TicketTypePillar;
