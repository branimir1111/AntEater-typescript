import { type TaskForComment, useAppSelector } from '@/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
import day from 'dayjs';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Form } from 'react-router-dom';
import { SubmitBtn, FormInput, DeleteCommentTask } from '@/components';

type CommentCartProps = {
  selectedTask: TaskForComment;
  projectId: string;
};

const CommentCart = ({ selectedTask, projectId }: CommentCartProps) => {
  const user = useAppSelector((state) => state.userState.user);
  const loggedUser = user;
  const { _id: taskId, comments } = selectedTask;

  return (
    <div className="w-full h-full bg-background p-2 rounded-md">
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
                  <footer className="w-full flex justify-end p-2">
                    <DeleteCommentTask id={_id} />
                  </footer>
                ) : null}
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-sm bg-background-first p-2 border">
          <h1>There is no comments for this task yet</h1>
        </div>
      )}
      <Separator className="my-2" />
      <h1 className="ml-2 mb-2">New comment</h1>
      <Form
        method="post"
        action="/dashboard/comments/add-task-comment"
        className="px-2"
      >
        <FormInput
          name="createdBy"
          type="hidden"
          defaultValue={`${loggedUser?._id}`}
        />
        <FormInput name="taskId" type="hidden" defaultValue={taskId} />
        <FormInput name="projectId" type="hidden" defaultValue={projectId} />
        <Textarea name="text" placeholder="Type here..."></Textarea>
        <div className="flex justify-end mt-2">
          <SubmitBtn text="Add comment" />
        </div>
      </Form>
    </div>
  );
};
export default CommentCart;
