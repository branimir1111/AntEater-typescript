import { Navbar, SmallSidebar, BigSidebar } from '@/components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

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
