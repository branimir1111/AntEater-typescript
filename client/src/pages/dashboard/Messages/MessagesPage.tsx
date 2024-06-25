import { useQuery } from '@tanstack/react-query';
import { customFetch, type UserMessagesProps } from '@/utils';
import { GlobalLoader, ErrorElement } from '@/components';
import { useState } from 'react';
import { UserList, UserMessages } from '@/components';

const MessagesPage = () => {
  const [activeUserId, setActiveUserId] = useState('');
  console.log(activeUserId);

  const { data, isPending, isError } = useQuery({
    queryKey: ['all-user-messages'],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-user-messages');
      return data;
    },
  });
  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { allUserMessages } = data;

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      <div className="w-full break12:flex gap-2">
        {/* Users */}
        <div className="bg-background rounded-sm border p-2">
          {allUserMessages.map((userMessages: UserMessagesProps) => {
            const { _id, firstName, lastName, email, role, avatar } =
              userMessages;
            return (
              <div key={_id} className="break12:w-72">
                <UserList
                  _id={_id}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  role={role}
                  avatar={avatar}
                  setActiveUserId={setActiveUserId}
                />
                <div className="break12:hidden">
                  <UserMessages />
                </div>
              </div>
            );
          })}
        </div>
        {/* Messages */}
        <div className="w-full max-break12:hidden">
          <UserMessages />
        </div>
      </div>
    </section>
  );
};
export default MessagesPage;
