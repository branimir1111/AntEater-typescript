import { Navbar, SmallSidebar, BigSidebar } from '@/components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const DashboardLayout = () => {
  const [openSmallSidebar, setOpenSmallSidebar] = useState(true);
  return (
    <main className="w-full">
      {openSmallSidebar ? (
        <SmallSidebar setOpenSmallSidebar={setOpenSmallSidebar} />
      ) : null}
      <Navbar />
      <BigSidebar />
      <Outlet />
    </main>
  );
};
export default DashboardLayout;
