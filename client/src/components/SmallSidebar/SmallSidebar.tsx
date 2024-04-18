import { CircleX } from 'lucide-react';
import { SmallSidebarNavLinks } from '..';
import BigSidebarLogo from '../dashboardComponents/BigSidebar/BigSidebarLogo';
import { Button } from '../ui/button';

type SmallSidebarProps = {
  setOpenSmallSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SmallSidebar = ({ setOpenSmallSidebar }: SmallSidebarProps) => {
  return (
    <section className="w-full bg-[url('./images/SmallSidebarBG.svg')] absolute flex flex-col items-center top-0 min-h-screen z-20 p-8 lg:hidden bg-no-repeat bg-cover">
      <header className="w-full flex items-center text-[2rem] text-base-content justify-end">
        <Button
          type="button"
          size="icon"
          onClick={() => setOpenSmallSidebar((prev) => !prev)}
          className="bg-transparent"
        >
          <CircleX />
        </Button>
      </header>
      <BigSidebarLogo classIcon="w-16" classText="text-white" />
      <SmallSidebarNavLinks setOpenSmallSidebar={setOpenSmallSidebar} />
    </section>
  );
};
export default SmallSidebar;
