import { twMerge } from 'tailwind-merge';
import {
  BigSidebarLogo,
  BigSidebar3DModel,
  BigSidebarNavLinks,
} from '@/components';

const BigSidebar = ({ openBigSidebar }: { openBigSidebar: boolean }) => {
  return (
    <aside
      className={twMerge(
        `-ml-[21rem] lg:ml-0 border-r-[1px] ${
          openBigSidebar ? 'lg:ml-0' : 'lg:-ml-[21rem]'
        } w-[21rem] transition-all duration-300 min-h-screen`
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
