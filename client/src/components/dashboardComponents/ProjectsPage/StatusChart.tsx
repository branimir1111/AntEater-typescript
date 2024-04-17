import { useLoaderData } from 'react-router-dom';
import { type AllProjectsResponseWithParams } from '@/utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const StatusChart = () => {
  const { ...response } = useLoaderData() as AllProjectsResponseWithParams;
  const { statusData } = response;

  return (
    <>
      <h1 className="text-center mt-4 text-md break5:text-lg break8:text-2xl">
        Number of projects by status
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={statusData} margin={{ top: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip labelClassName="text-black bg-cyan-100 rounded-sm text-center" />
          <Bar dataKey="projects" fill="#5048e5" barSize={70} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default StatusChart;
