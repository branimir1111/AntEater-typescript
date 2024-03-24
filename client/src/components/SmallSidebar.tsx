import { CircleX } from 'lucide-react';
import logo from '../images/anteater.svg';
import { mainLinks } from '@/utils';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/utils';

type SmallSidebarProps = {
  setOpenSmallSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SmallSidebar = ({ setOpenSmallSidebar }: SmallSidebarProps) => {
  const user = useAppSelector((state) => state.userState.user);

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
      <div className="py-2 px-8 grid items-center justify-start">
        <nav id="main-nav-links">
          {mainLinks.map((link) => {
            const { id, text, path, icon } = link;

            if (path === 'project-manager' && user?.role === 'developer')
              return;
            if (path === 'admin' && user?.role === 'developer') return;
            if (path === 'admin' && user?.role === 'projectmanager') return;

            return (
              <NavLink
                to={path}
                key={id}
                onClick={() => setOpenSmallSidebar((prev: boolean) => !prev)}
                className="py-3 flex gap-4 text-[1.2rem] opacity-50 hover:opacity-70 text-base-content items-center"
                end
              >
                {icon}
                {text}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
export default SmallSidebar;
