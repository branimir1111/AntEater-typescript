import { type AdminMessagesProps } from '@/utils';
import { Separator } from '@/components/ui/separator';
import { MoveRight, CircleUserRound } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import day from 'dayjs';
import { DeleteMessage } from '@/components';

type AdminMessagesContainerProps = {
  allAdminMessages: AdminMessagesProps[];
};

const AdminMessagesContainer = ({
  allAdminMessages,
}: AdminMessagesContainerProps) => {
  return (
    <div className="mt-4 grid gap-2 break14:grid-cols-2">
      {allAdminMessages.map((message) => {
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
              <DeleteMessage id={_id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AdminMessagesContainer;
