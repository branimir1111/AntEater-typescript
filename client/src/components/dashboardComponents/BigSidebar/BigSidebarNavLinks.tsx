import { mainLinks, useAppSelector } from '@/utils';
import { NavLink } from 'react-router-dom';

const BigSidebarNavLinks = () => {
  const user = useAppSelector((state) => state.userState.user);
  return (
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
            className={({ isActive }) => {
              return `w-full py-3 flex gap-4 text-[1rem] text-foreground50 items-center justify-start ${
                isActive
                  ? 'opacity-100 font-medium translate-x-1 transition-all'
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
