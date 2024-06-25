import { type UserMessagesProps } from '@/utils';

type UserMessages = {
  selectedUser: UserMessagesProps;
};

const UserMessages = ({ selectedUser }: UserMessages) => {
  const { messages } = selectedUser;

  return (
    <div>
      {messages?.map((message) => {
        const { _id, text } = message;
        return (
          <div key={_id}>
            <h1>{text}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default UserMessages;
