import { PieChart, ClipboardList, BookOpenCheck } from 'lucide-react';
type allStatsProp = {
  numOfAllProjects: number;
  numOfAllTasks: number;
  numOfAllTickets: number;
};

type StatsContainerProps = {
  allStats: allStatsProp;
};

const StatsContainer = ({ allStats }: StatsContainerProps) => {
  const statsData = [
    {
      _id: 1,
      text: 'Projects',
      count: allStats.numOfAllProjects,
      icon: <PieChart className="w-10 h-10" />,
      borderColor: 'border-b-indigo-500',
      textColor: 'text-indigo-500',
    },
    {
      _id: 2,
      text: 'Tasks',
      count: allStats.numOfAllTasks,
      icon: <ClipboardList className="w-10 h-10" />,
      borderColor: 'border-b-[#18981D]',
      textColor: 'text-[#18981D]',
    },
    {
      _id: 3,
      text: 'Tickets',
      count: allStats.numOfAllTickets,
      icon: <BookOpenCheck className="w-10 h-10" />,
      borderColor: 'border-b-[#F0B429]',
      textColor: 'text-[#F0B429]',
    },
  ];
  return (
    <div className="grid gap-2 break7:grid-cols-2 break14:grid-cols-3 break18:grid-cols-6">
      {statsData.map((stat) => {
        const { _id, text, count, icon, borderColor, textColor } = stat;
        return (
          <article
            key={_id}
            className={`border border-b-4 ${borderColor} rounded-sm py-2 px-4`}
          >
            <h1 className="text-xl font-semibold text-muted-foreground">
              {text}
            </h1>
            <div className="flex items-center justify-between my-4">
              <h1 className={`text-5xl ${textColor} font-bold`}>{count}</h1>
              <div className={`${textColor}`}>{icon}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default StatsContainer;
