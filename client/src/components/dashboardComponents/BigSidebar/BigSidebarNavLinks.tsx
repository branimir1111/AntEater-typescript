import {
  mainLinksDeveloper,
  mainLinksPM,
  mainLinksAdmin,
  type MainLink,
  useAppSelector,
} from '@/utils';
import { NavLink } from 'react-router-dom';

const BigSidebarNavLinks = () => {
  const user = useAppSelector((state) => state.userState.user);
  let linksList: MainLink[] = [];
  if (user?.role === 'developer') {
    linksList = mainLinksDeveloper;
  }
  if (user?.role === 'projectmanager') {
    linksList = mainLinksPM;
  }
  if (user?.role === 'admin') {
    linksList = mainLinksAdmin;
  }
  return (
    <nav id="main-nav-links" className="w-full mt-2">
      {linksList.map((link) => {
        const { id, text, path, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) => {
              return `w-full py-2 pl-2 flex gap-2 text-[1rem] items-center justify-start ${
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
