import { PanelLeftClose, PanelLeftOpen, Menu } from 'lucide-react';
import { ProfileLogoutDropdown, ThemeToggle } from '@/components';
// import ThemeToggle from '../../ThemeToggle';
// import { Button } from '../../ui/button';
import { Button } from '@/components/ui/button';

type NavBarProps = {
  openBigSidebar: boolean;
  setOpenBigSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSmallSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({
  openBigSidebar,
  setOpenBigSidebar,
  setOpenSmallSidebar,
}: NavBarProps) => {
  const handleBigSidebar = () => {
    setOpenBigSidebar((prev) => !prev);
  };

  const handleSmallSidebar = () => {
    setOpenSmallSidebar((prev) => !prev);
  };
  return (
    <nav className="w-full flex justify-between items-center px-4 py-4 md:px-12 border-b-[1px]">
      <div>
        {openBigSidebar ? (
          <Button
            variant="secondary"
            size="icon"
            className="text-4xl cursor-pointer max-lg:hidden"
          >
            <PanelLeftClose onClick={handleBigSidebar} />
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="icon"
            className="text-4xl cursor-pointer max-lg:hidden"
          >
            <PanelLeftOpen onClick={handleBigSidebar} />
          </Button>
        )}
        <Menu
          onClick={handleSmallSidebar}
          className="text-3xl cursor-pointer lg:hidden text-base-content"
        />
      </div>
      <div className="hidden sm:block">
        <h1 className="font-poppins font-medium text-3xl">
          <span className="text-muted-foreground font-bold">D</span>ashboard
        </h1>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <ThemeToggle />
        <ProfileLogoutDropdown />
      </div>
    </nav>
  );
};
export default Navbar;
