import { Navbar, SmallSidebar, BigSidebar } from '@/components';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <SmallSidebar />
      <BigSidebar />
      <Outlet />
    </>
  );
};
export default DashboardLayout;
