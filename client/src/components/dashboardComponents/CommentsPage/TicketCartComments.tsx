import { type ProjectForTicketComment, type TicketForComment } from '@/utils';
import { CommentTicketCart } from '@/components';
import { Badge } from '@/components/ui/badge';

type TaskCartCommentsProps = {
  selectedProject: ProjectForTicketComment;
  singleTicketId: string;
  selectedTicket: TicketForComment;
  setSingleTicketId: React.Dispatch<React.SetStateAction<string>>;
};

const TicketCartComments = ({
  selectedProject,
  singleTicketId,
  selectedTicket,
  setSingleTicketId,
}: TaskCartCommentsProps) => {
  const { _id: projectId, tickets } = selectedProject;

  if (!singleTicketId) {
    singleTicketId = tickets[0]._id;
  }

  return (
    <div className="bg-background rounded-sm border h-full">
      <div className="bg-[#51CA58] p-2 rounded-sm bg-opacity-10 h-full">
        <h1 className="text-2xl font-semibold mb-4">Tickets</h1>
        <div className="w-full grid place-items-start gap-2">
          {tickets.map((ticket) => {
            const { _id, title, ticketType, status, priority } = ticket;
            const isActive = singleTicketId === _id;

            let textColor = '';
            let bgColor = '';
            switch (ticketType) {
              case 'feature':
                textColor = 'text-indigo-50';
                bgColor = 'bg-indigo-700';
                break;
              case 'improvement':
                textColor = 'text-[#E1FCF8]';
                bgColor = 'bg-[#099AA4]';
                break;
              case 'security':
                textColor = 'text-[#FFFBEA]';
                bgColor = 'bg-[#DE911D]';
                break;
              case 'bug':
                textColor = 'text-[#FFE3E3]';
                bgColor = 'bg-[#AB091E]';
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
              <div className="w-full" key={_id}>
                <article
                  className={`w-full p-2 cursor-pointer rounded-sm bg-[#51CA58] bg-opacity-20 border hover:bg-opacity-30 ${
                    isActive
                      ? 'bg-[#51CA58] bg-opacity-30 border-[#51CA58]'
                      : ''
                  } transition-all duration-100`}
                  onClick={() => setSingleTicketId(_id)}
                >
                  <h1 className="text-lg font-medium mb-2">{title}</h1>
                  <Badge
                    className={`rounded-sm mr-1 ${badgeBg} ${badgeText} hover:${badgeBg} hover:${badgeText}`}
                  >
                    {priority}
                  </Badge>
                  <Badge
                    className={`rounded-sm bg-[#51CA58] hover:bg-[#51CA58] bg-opacity-15 hover:bg-opacity-15 mr-1`}
                  >
                    {status}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`rounded-sm ${textColor} ${bgColor}`}
                  >
                    {ticketType}
                  </Badge>
                </article>
                {singleTicketId === _id ? (
                  <div className="w-full break15:hidden">
                    <CommentTicketCart
                      selectedTicket={selectedTicket}
                      projectId={projectId}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TicketCartComments;
