import { type TaskForComment } from '@/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
import day from 'dayjs';
import { Separator } from '@/components/ui/separator';

type CommentCartProps = {
  selectedTask: TaskForComment;
};

const CommentCart = ({ selectedTask }: CommentCartProps) => {
  const { comments } = selectedTask;
  console.log(comments);

  return (
    <div className="w-full h-full bg-background p-2 rounded-md">
      {comments.length > 0 ? (
        <div className="w-full grid gap-2">
          {comments.map((comment) => {
            const { _id, user, createdAt, text } = comment;

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
              <article key={_id} className="bg-background-first rounded-sm">
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
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-sm bg-background-first p-2">
          <h1>There is no comments for this task</h1>
        </div>
      )}
    </div>
  );
};
export default CommentCart;
