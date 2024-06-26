import { useQuery } from '@tanstack/react-query';
import { customFetch, type UserMessagesProps } from '@/utils';
import { GlobalLoader, ErrorElement } from '@/components';
import { useState } from 'react';
import { UserList, UserMessages } from '@/components';

const MessagesPage = () => {
  const [activeUserId, setActiveUserId] = useState('');

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

  let selectedUser;

  if (activeUserId) {
    selectedUser = allUserMessages.find((user: UserMessagesProps) => {
      return user._id === activeUserId;
    });
  } else {
    selectedUser = allUserMessages[0];
  }

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
        Your messages
      </h2>
      <div className="m-auto w-60 h-[2px] bg-gray-500 mb-2 rounded-sm"></div>
      <div className="w-full break12:flex gap-1">
        {/* Users */}
        <div className="bg-background rounded-sm border p-2 grid gap-1">
          {allUserMessages.map((userMessages: UserMessagesProps) => {
            const { _id, firstName, lastName, email, role, avatar } =
              userMessages;
            const isActive = selectedUser._id === _id;
            return (
              <div key={_id} className="break12:w-72">
                <UserList
                  _id={_id}
                  isActive={isActive}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  role={role}
                  avatar={avatar}
                  setActiveUserId={setActiveUserId}
                />
                <div className="break12:hidden">
                  {isActive ? (
                    <UserMessages selectedUser={selectedUser} />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        {/* Messages */}
        <div className="w-full max-break12:hidden">
          <UserMessages selectedUser={selectedUser} />
        </div>
      </div>
    </section>
  );
};
export default MessagesPage;
