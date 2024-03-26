import { CircleX } from 'lucide-react';
import logo from '../images/anteater.svg';
import { SmallSidebarNavLinks } from '.';

type SmallSidebarProps = {
  setOpenSmallSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SmallSidebar = ({ setOpenSmallSidebar }: SmallSidebarProps) => {
  return (
    <section className="bg-base-100 w-full absolute flex flex-col items-center top-0 min-h-screen z-20 p-8 lg:hidden">
      <header className="w-full flex items-center text-[2rem] text-base-content justify-end">
        <button
          type="button"
          onClick={() => setOpenSmallSidebar((prev) => !prev)}
        >
          <CircleX />
        </button>
      </header>
      <img src={logo} alt="logo" className="bg-white w-16 rounded-full" />
      <SmallSidebarNavLinks setOpenSmallSidebar={setOpenSmallSidebar} />
    </section>
  );
};
export default SmallSidebar;
