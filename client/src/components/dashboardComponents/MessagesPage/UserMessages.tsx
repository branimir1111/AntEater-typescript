import { Separator } from '@/components/ui/separator';
import { type UserMessagesProps } from '@/utils';
import { MoveRight, CircleUserRound } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import day from 'dayjs';
import AddNewMessage from './AddNewMessage';
import DeleteMessage from './DeleteMessage';
import EditMessage from './EditMessage';
import { useAppSelector } from '@/utils';

type MessagesProps = {
  selectedUser: UserMessagesProps;
};

const UserMessages = ({ selectedUser }: MessagesProps) => {
  const user = useAppSelector((state) => state.userState.user);
  const { _id, messages } = selectedUser;
  const numOfMessages = messages.length;

  return (
    <div className="bg-background p-2 rounded-sm border">
      <AddNewMessage sendToUserId={_id} />
      {numOfMessages > 0 ? (
        <div className="grid gap-2">
          {messages.map((message) => {
            const { _id, text, senderDetails, receiverDetails, createdAt } =
              message;
            const date = day(createdAt).format('D MMM YYYY');
            return (
              <div key={_id} className="p-2 bg-[#3AE7E1] bg-opacity-10">
                <div className="grid gap-1 break5:flex">
                  <div className="flex gap-2">
                    <Avatar className=" w-6 h-6">
                      <AvatarImage
                        src={senderDetails.avatar}
                        alt="user"
                        className="object-cover"
                      />
                      <AvatarFallback>
                        <CircleUserRound />
                      </AvatarFallback>
                    </Avatar>
                    {senderDetails.firstName}
                  </div>
                  <MoveRight className="text-[#18981D]" />
                  <div className="flex gap-2">
                    <Avatar className=" w-6 h-6">
                      <AvatarImage
                        src={receiverDetails.avatar}
                        alt="user"
                        className="object-cover"
                      />
                      <AvatarFallback>
                        <CircleUserRound />
                      </AvatarFallback>
                    </Avatar>
                    {receiverDetails.firstName}
                  </div>
                </div>
                <div className="mt-1 text-muted-foreground">
                  Sent: <span>{date}</span>
                </div>
                <Separator className="my-1" />
                <h1>{text}</h1>
                <div className="flex gap-2 mt-4">
                  {senderDetails._id === user?._id ? (
                    <>
                      <EditMessage id={_id} text={text} />
                      <DeleteMessage id={_id} />
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No messages ...</div>
      )}
    </div>
  );
};
export default UserMessages;
