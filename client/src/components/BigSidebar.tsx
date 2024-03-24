import { twMerge } from 'tailwind-merge';
import logo from '../images/anteater.svg';
import { mainLinks, useAppSelector } from '@/utils';
import { NavLink } from 'react-router-dom';

const BigSidebar = ({ openBigSidebar }: { openBigSidebar: boolean }) => {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <aside
      className={twMerge(
        `-ml-80 lg:ml-0 border-r-[1px] border-r-base-300 ${
          openBigSidebar ? 'lg:ml-0' : 'lg:-ml-80'
        } w-80 transition-all duration-300 min-h-screen bg-base-200`
      )}
    >
      <div className="w-full py-2 grid place-items-center">
        <img src={logo} alt="anteater" className="w-8 bg-white rounded-full" />
        <h1 className="text-base-content text-2xl self-end">
          Ant<span className="text-yellow-400">E</span>ater
        </h1>
      </div>
      <div className="w-full py-2 px-8 grid place-items-start">
        <div className="w-full mb-4 border-base-300 border bg-base-100 rounded h-28 text-center text-base-content">
          <h1>ADD</h1>
          <p>Some 3D model with tree.js library</p>
        </div>
        <hr className="w-full border-b-base-300 border-[1px]" />
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
                className={({ isActive }) => {
                  return `w-full py-3 flex gap-4 text-[1rem] hover:opacity-70 items-center justify-start text-base-content ${
                    isActive
                      ? 'opacity-100 font-medium translate-x-1 transition-all'
                      : 'opacity-50'
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
    </aside>
  );
};
export default BigSidebar;
