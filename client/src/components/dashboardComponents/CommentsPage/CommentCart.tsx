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
    <div className="w-full">
      {comments.length > 0 ? (
        <div className="w-full">
          {comments.map((comment) => {
            const { _id, user, createdAt } = comment;

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
              <article key={_id} className="border border-green-500 mb-2 p-2">
                <header className="break4:flex gap-4 justify-between">
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
              </article>
            );
          })}
        </div>
      ) : (
        <h1>There is no comments for this task</h1>
      )}
    </div>
  );
};
export default CommentCart;
