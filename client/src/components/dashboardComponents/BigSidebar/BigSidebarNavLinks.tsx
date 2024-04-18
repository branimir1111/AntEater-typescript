import { mainLinks, useAppSelector } from '@/utils';
import { NavLink } from 'react-router-dom';

const BigSidebarNavLinks = () => {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <nav id="main-nav-links" className="w-full mt-2">
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
        if (path === 'manager-assign-ticket' && user?.role === 'admin') return;
        if (path === 'manager-assign-ticket' && user?.role === 'developer')
          return;
        if (path === 'admin-manage-roles' && user?.role === 'projectmanager')
          return;
        if (path === 'admin-manage-roles' && user?.role === 'developer') return;
        if (path === 'admin-assign-task' && user?.role === 'projectmanager')
          return;
        if (path === 'admin-assign-task' && user?.role === 'developer') return;
        if (path === 'admin-assign-ticket' && user?.role === 'projectmanager')
          return;
        if (path === 'admin-assign-ticket' && user?.role === 'developer')
          return;
        if (path === 'admin-member-profiles' && user?.role === 'projectmanager')
          return;
        if (path === 'admin-member-profiles' && user?.role === 'developer')
          return;

        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) => {
              return `w-full py-2 pl-2 flex gap-4 text-[1rem] items-center justify-start ${
                isActive
                  ? 'opacity-100 font-medium transition-all bg-background-second rounded-md'
                  : 'opacity-70 hover:opacity-80'
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
  );
};
export default BigSidebarNavLinks;
