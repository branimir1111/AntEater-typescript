import { mainLinks, useAppSelector } from '@/utils';
import { NavLink } from 'react-router-dom';

const BigSidebarNavLinks = () => {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <nav id="main-nav-links" className="w-full mt-2">
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
