import { Skeleton } from '@/components/ui/skeleton';

const AllProjectsLoader = () => {
  return (
    <>
      <Skeleton className="w-[167px] h-10 rounded-sm m-4 mb-10" />
      <div className="w-full grid place-items-center gap-4 md:grid-cols-2 2xl:grid-cols-3 p-4">
        <Skeleton className="w-full h-[356px] rounded-md" />
        <Skeleton className="w-full h-[356px] rounded-md" />
        <Skeleton className="w-full h-[356px] rounded-md" />
      </div>
    </>
  );
};
export default AllProjectsLoader;
