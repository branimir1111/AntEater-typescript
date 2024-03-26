import { Navbar, SmallSidebar, BigSidebar } from '@/components';
import { Outlet, redirect } from 'react-router-dom';
import { useState } from 'react';
import { customFetch } from '@/utils';
import { type QueryClient } from '@tanstack/react-query';
import { ReduxStore } from '@/features/store';
import { updateUser } from '@/features/user/userSlice';

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/current-user');
    return data;
  },
};

export const loader =
  (store: ReduxStore, queryClient: QueryClient) => async () => {
    try {
      const user = await queryClient.ensureQueryData(userQuery);
      store.dispatch(updateUser(user.currentUser));
      return user.currentUser;
    } catch (error) {
      return redirect('/');
    }
  };

const DashboardLayout = () => {
  const [openBigSidebar, setOpenBigSidebar] = useState(true);
  const [openSmallSidebar, setOpenSmallSidebar] = useState(false);

  return (
    <main className="w-full">
      {openSmallSidebar ? (
        <SmallSidebar setOpenSmallSidebar={setOpenSmallSidebar} />
      ) : null}
      <div className="w-full flex">
        <BigSidebar openBigSidebar={openBigSidebar} />
        <div className="w-full">
          <Navbar
            openBigSidebar={openBigSidebar}
            setOpenBigSidebar={setOpenBigSidebar}
            setOpenSmallSidebar={setOpenSmallSidebar}
          />
          <Outlet />
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;
