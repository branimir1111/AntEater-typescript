import {
  mainLinksDeveloper,
  mainLinksPM,
  mainLinksAdmin,
  type MainLink,
  useAppSelector,
} from '@/utils';
import { NavLink } from 'react-router-dom';

type SmallSidebarProps = {
  setOpenSmallSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SmallSidebarNavLinks = ({ setOpenSmallSidebar }: SmallSidebarProps) => {
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
    <div className="py-2 px-8 grid items-center justify-start bg-[#0E2C49] rounded-md bg-opacity-50">
      <nav id="main-nav-links">
        {linksList.map((link) => {
          const { id, text, path, icon } = link;

          return (
            <NavLink
              to={path}
              key={id}
              onClick={() => setOpenSmallSidebar((prev) => !prev)}
              className={({ isActive }) => {
                return `w-full py-2 pl-2 flex gap-2 text-[1rem] rounded-md hover:opacity-70 items-center justify-start text-white ${
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
