import { Navbar, SmallSidebar, BigSidebar } from '@/components';
import {
  LoaderFunction,
  Outlet,
  redirect,
  useNavigation,
} from 'react-router-dom';
import { useState } from 'react';
import { customFetch } from '@/utils';
import { ReduxStore } from '@/features/store';
import { updateUser } from '@/features/user/userSlice';
import { AllProjectsLoader } from '@/components';

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async () => {
    try {
      const { data } = await customFetch.get('/current-user');
      const currentUser = data.currentUser;
      store.dispatch(updateUser(currentUser));
      return currentUser;
    } catch (error) {
      return redirect('/');
    }
  };

const DashboardLayout = () => {
  const [openBigSidebar, setOpenBigSidebar] = useState(true);
  const [openSmallSidebar, setOpenSmallSidebar] = useState(false);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

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
          {isPageLoading ? <AllProjectsLoader /> : <Outlet />}
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;
