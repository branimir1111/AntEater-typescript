import { type AdminTicketCommentsProps } from '@/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
import day from 'dayjs';
import { Separator } from '@/components/ui/separator';
import { DeleteCommentTicket } from '@/components';
import { Badge } from '@/components/ui/badge';

type AdminTicketCommentContainerProps = {
  allTicketComments: AdminTicketCommentsProps[];
};

const AdminTicketCommentsContainer = ({
  allTicketComments,
}: AdminTicketCommentContainerProps) => {
  return (
    <div className="w-full mt-4 grid break12:grid-cols-2 break17:grid-cols-3 gap-2">
      {allTicketComments.map((comment) => {
        const {
          _id,
          createdAt,
          text,
          creatorDetails,
          projectDetails,
          ticketDetails,
        } = comment;

        let userRole = '';
        switch (creatorDetails.role) {
          case 'developer':
            userRole = 'Developer';
            break;
          case 'projectmanager':
            userRole = 'Project Manager';
            break;
        }

        const date = day(createdAt).format('D MMM YYYY');
        return (
          <article key={_id} className="bg-background-first rounded-sm border">
            <header className="break4:flex gap-4 justify-between p-2">
              <div className="break5:flex break5:gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={creatorDetails.avatar}
                    alt="ant"
                    className="object-cover"
                  />
                  <AvatarFallback>
                    <CircleUserRound />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className=" font-bold">
                    {creatorDetails.firstName + ' ' + creatorDetails.lastName}
                  </h1>
                  <p className="text-sm">{userRole}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{date}</p>
            </header>
            <div className="p-2 bg-background">
              <p>Project</p>
              <div className="flex gap-2 text-muted-foreground">
                <p>{projectDetails.projectName}</p>
                <Badge variant="outline">{projectDetails.status}</Badge>
              </div>
              <p>Task</p>
              <div className="flex gap-2 text-muted-foreground">
                <p>{ticketDetails.title}</p>
                <Badge variant="outline">{ticketDetails.priority}</Badge>
              </div>
            </div>
            <Separator className="my-2" />
            <div className="px-4 pb-2">
              <p>{text}</p>
            </div>
            <div className="flex justify-end p-2">
              <DeleteCommentTicket id={_id} />
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default AdminTicketCommentsContainer;
