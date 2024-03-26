import { mainLinks, useAppSelector } from '@/utils';
import { NavLink } from 'react-router-dom';

type SmallSidebarProps = {
  setOpenSmallSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SmallSidebarNavLinks = ({ setOpenSmallSidebar }: SmallSidebarProps) => {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <div className="py-2 px-8 grid items-center justify-start bg-[#0E2C49] rounded-md bg-opacity-50">
      <nav id="main-nav-links">
        {mainLinks.map((link) => {
          const { id, text, path, icon } = link;

          if (path === 'manager' && user?.role === 'developer') return;
          if (path === 'admin' && user?.role === 'developer') return;
          if (path === 'admin' && user?.role === 'projectmanager') return;

          return (
            <NavLink
              to={path}
              key={id}
              onClick={() => setOpenSmallSidebar((prev) => !prev)}
              className={({ isActive }) => {
                return `w-full py-3 flex gap-4 text-[1rem] hover:opacity-70 items-center justify-start text-white ${
                  isActive
                    ? 'opacity-100 translate-x-2 transition-all'
                    : 'opacity-60'
                }`;
              }}
              end
            >
              {icon}
              {text}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
export default SmallSidebarNavLinks;
