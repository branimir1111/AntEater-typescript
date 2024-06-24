import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
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

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      <div className="w-full grid break12:grid-cols-2 gap-2">
        {/* Users */}
        <div className="w-full bg-background rounded-sm border">
          {allUserMessages.map((userMessages) => {
            const { _id } = userMessages;
            return (
              <div key={_id}>
                <UserList />
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
