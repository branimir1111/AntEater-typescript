import { PieChart } from 'lucide-react';
type allStatsProp = {
  numOfAllProjects: number;
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
      borderColor: 'border-b-chart-1',
      textColor: 'text-chart-1',
    },
  ];
  return (
    <div className="grid break7:grid-cols-2 break14:grid-cols-3 break18:grid-cols-6">
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
