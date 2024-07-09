import {
  PieChart,
  ClipboardList,
  BookOpenCheck,
  MessageSquareQuote,
  Mail,
  Users,
} from 'lucide-react';
type allStatsProp = {
  numOfAllProjects: number;
  numOfAllTasks: number;
  numOfAllTickets: number;
  numOfComments: number;
  numOfMessages: number;
  numOfUsers: number;
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
      borderColor: 'border-indigo-500',
      textColor: 'text-indigo-500',
    },
    {
      _id: 2,
      text: 'Tasks',
      count: allStats.numOfAllTasks,
      icon: <ClipboardList className="w-10 h-10" />,
      borderColor: 'border-[#18981D]',
      textColor: 'text-[#18981D]',
    },
    {
      _id: 3,
      text: 'Tickets',
      count: allStats.numOfAllTickets,
      icon: <BookOpenCheck className="w-10 h-10" />,
      borderColor: 'border-[#F0B429]',
      textColor: 'text-[#F0B429]',
    },
    {
      _id: 4,
      text: 'Comments',
      count: allStats.numOfComments,
      icon: <MessageSquareQuote className="w-10 h-10" />,
      borderColor: 'border-[#8719E0]',
      textColor: 'text-[#8719E0]',
    },
    {
      _id: 5,
      text: 'Messages',
      count: allStats.numOfMessages,
      icon: <Mail className="w-10 h-10" />,
      borderColor: 'border-[#DA127D]',
      textColor: 'text-[#DA127D]',
    },
    {
      _id: 6,
      text: 'Users',
      count: allStats.numOfUsers,
      icon: <Users className="w-10 h-10" />,
      borderColor: 'border-[#1CD4D4]',
      textColor: 'text-[#1CD4D4]',
    },
  ];
  return (
    <div className="grid gap-2 break7:grid-cols-2 break14:grid-cols-3 break18:grid-cols-6">
      {statsData.map((stat) => {
        const { _id, text, count, icon, borderColor, textColor } = stat;
        return (
          <article
            key={_id}
            className={`border border-b-4 ${borderColor} rounded-md py-2 px-4`}
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
