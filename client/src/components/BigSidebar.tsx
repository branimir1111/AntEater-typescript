import { twMerge } from 'tailwind-merge';
import { BigSidebarLogo, BigSidebar3DModel, BigSidebarNavLinks } from '.';

const BigSidebar = ({ openBigSidebar }: { openBigSidebar: boolean }) => {
  return (
    <aside
      className={twMerge(
        `-ml-80 lg:ml-0 border-r-[1px] border-r-base-300 ${
          openBigSidebar ? 'lg:ml-0' : 'lg:-ml-80'
        } w-80 transition-all duration-300 min-h-screen bg-base-200`
      )}
    >
      <BigSidebarLogo />
      <div className="w-full py-2 px-8 grid place-items-start">
        <BigSidebar3DModel />
        <BigSidebarNavLinks />
      </div>
    </aside>
  );
};
export default BigSidebar;
