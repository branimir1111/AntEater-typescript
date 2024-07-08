import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type ProjectStatus = {
  status: string;
  projects: number;
};

type ProjectsStatsAreaChartProps = {
  projectsByStatus: ProjectStatus[];
};

const ProjectsStatsAreaChart = ({
  projectsByStatus,
}: ProjectsStatsAreaChartProps) => {
  const chartConfig = {
    projects: {
      label: 'Projects',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects - AreaChart</CardTitle>
        <CardDescription>Showing number of projects by status</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={projectsByStatus}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="status"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="projects"
              type="natural"
              fill="var(--color-projects)"
              fillOpacity={0.4}
              stroke="var(--color-projects)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default ProjectsStatsAreaChart;
