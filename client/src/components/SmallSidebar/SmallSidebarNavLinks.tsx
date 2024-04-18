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

          if (path === 'admin' && user?.role === 'developer') return;
          if (path === 'admin' && user?.role === 'projectmanager') return;
          if (path === 'manager' && user?.role === 'developer') return;
          if (path === 'manager' && user?.role === 'admin') return;
          if (path === 'my-tasks' && user?.role === 'projectmanager') return;
          if (path === 'my-tasks' && user?.role === 'admin') return;
          if (path === 'my-projects' && user?.role === 'projectmanager') return;
          if (path === 'my-projects' && user?.role === 'admin') return;
          if (path === 'my-tickets' && user?.role === 'projectmanager') return;
          if (path === 'my-tickets' && user?.role === 'admin') return;
          if (path === 'add-tickets' && user?.role === 'projectmanager') return;
          if (path === 'add-tickets' && user?.role === 'admin') return;
          if (path === 'manager-assign-task' && user?.role === 'admin') return;
          if (path === 'manager-assign-task' && user?.role === 'developer')
            return;
          if (path === 'manager-assign-ticket' && user?.role === 'admin')
            return;
          if (path === 'manager-assign-ticket' && user?.role === 'developer')
            return;
          if (path === 'admin-manage-roles' && user?.role === 'projectmanager')
            return;
          if (path === 'admin-manage-roles' && user?.role === 'developer')
            return;
          if (path === 'admin-assign-task' && user?.role === 'projectmanager')
            return;
          if (path === 'admin-assign-task' && user?.role === 'developer')
            return;
          if (path === 'admin-assign-ticket' && user?.role === 'projectmanager')
            return;
          if (path === 'admin-assign-ticket' && user?.role === 'developer')
            return;
          if (
            path === 'admin-member-profiles' &&
            user?.role === 'projectmanager'
          )
            return;
          if (path === 'admin-member-profiles' && user?.role === 'developer')
            return;

          return (
            <NavLink
              to={path}
              key={id}
              onClick={() => setOpenSmallSidebar((prev) => !prev)}
              className={({ isActive }) => {
                return `w-full py-2 pl-2 flex gap-4 text-[1rem] rounded-md hover:opacity-70 items-center justify-start text-white ${
                  isActive
                    ? 'opacity-100 transition-all bg-[#0E2C49]'
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
