import { UsersStatsRadialChart } from '@/components';

type UsersStatsProps = {
  projectmanagers: number;
  developers: number;
};
type UsersStatsContainerProps = {
  usersByRole: UsersStatsProps[];
};

const UsersStatsContainer = ({ usersByRole }: UsersStatsContainerProps) => {
  return (
    <div className="mt-4">
      <UsersStatsRadialChart usersByRole={usersByRole} />
    </div>
  );
};
export default UsersStatsContainer;
