import { Skeleton } from '@/components/ui/skeleton';

const DevProjectsLoader = () => {
  return (
    <div className="w-full p-8">
      <div className="w-full grid place-items-center">
        <Skeleton className="h-9 w-40 rounded-md" />
      </div>
      <div className="w-full mt-24">
        <Skeleton className="h-[218px] rounded-md" />
      </div>
      <div className="w-full mt-8">
        <Skeleton className="h-20 rounded-md" />
      </div>
    </div>
  );
};
export default DevProjectsLoader;
