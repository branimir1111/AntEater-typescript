import { type TicketForComment, useAppSelector } from '@/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
import day from 'dayjs';
import { Separator } from '@/components/ui/separator';
import {
  DeleteCommentTicket,
  EditCommentTask,
  AddNewCommentTicket,
} from '@/components';

type CommentTicketCartProps = {
  selectedTicket: TicketForComment;
  projectId: string;
};

const CommentTicketCart = ({
  selectedTicket,
  projectId,
}: CommentTicketCartProps) => {
  const user = useAppSelector((state) => state.userState.user);
  const loggedUser = user;
  const { _id: ticketId, comments } = selectedTicket;

  return (
    <div className="w-full h-full bg-background rounded-md border ">
      <div className="bg-[#51CA58] bg-opacity-5 h-full p-2">
        <h1 className="text-2xl font-semibold mb-4">Comments</h1>
        <AddNewCommentTicket ticketId={ticketId} projectId={projectId} />
        {comments.length > 0 ? (
          <div className="w-full grid gap-2">
            {comments.map((comment) => {
              const { _id, user, createdAt, createdBy, text } = comment;

              let userRole = '';
              switch (user.role) {
                case 'developer':
                  userRole = 'Developer';
                  break;
                case 'projectmanager':
                  userRole = 'Project Manager';
                  break;
              }

              const date = day(createdAt).format('D MMM YYYY');

              return (
                <article
                  key={_id}
                  className="bg-background-first rounded-sm border"
                >
                  <header className="break4:flex gap-4 justify-between p-2">
                    <div className="break5:flex break5:gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={user.avatar}
                          alt="ant"
                          className="object-cover"
                        />
                        <AvatarFallback>
                          <CircleUserRound />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className=" font-bold">
                          {user.firstName + ' ' + user.lastName}
                        </h1>
                        <p className="text-sm">{userRole}</p>
                        <p className="text-sm">{user.email}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{date}</p>
                  </header>
                  <Separator className="my-2" />
                  <div className="px-4 pb-2">
                    <p>{text}</p>
                  </div>
                  {loggedUser?._id === createdBy ? (
                    <footer className="w-full flex justify-end gap-2 p-2">
                      <EditCommentTask id={_id} text={text} />
                      <DeleteCommentTicket id={_id} />
                    </footer>
                  ) : null}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-sm bg-background-first p-2 border">
            <h1>There is no comments for this ticket yet</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentTicketCart;
