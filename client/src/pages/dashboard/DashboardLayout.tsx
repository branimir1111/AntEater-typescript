import { Navbar, SmallSidebar, BigSidebar } from '@/components';

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <SmallSidebar />
      <BigSidebar />
      <h1 className="text-5xl">DashboardLayout</h1>
    </>
  );
};
export default DashboardLayout;
