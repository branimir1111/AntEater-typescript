import { Skeleton } from '@/components/ui/skeleton';

const AllProjectsLoader = () => {
  return (
    <>
      <div className="w-full p-8">
        <div className="w-full">
          <Skeleton className="w-full h-10 max-w-[168px] rounded-md mb-8" />
        </div>
        <div className="w-full mb-8">
          <Skeleton className="w-full h-[250px] rounded-md" />
        </div>
        <div className="w-full grid place-items-center gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <Skeleton className="w-full h-[356px] rounded-md" />
          <Skeleton className="w-full h-[356px] rounded-md" />
          <Skeleton className="w-full h-[356px] rounded-md" />
        </div>
      </div>
    </>
  );
};
export default AllProjectsLoader;
