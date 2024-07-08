import { XAxis, Bar, BarChart, YAxis } from 'recharts';
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

type ProjectStatsContainerProps = {
  projectsByStatus: ProjectStatus[];
};

const ProjectsStatsBarChart = ({
  projectsByStatus,
}: ProjectStatsContainerProps) => {
  const projectsByStatusWithColor = projectsByStatus.map((project) => {
    const { status, projects } = project as ProjectStatus;

    let barColor = '';

    switch (status) {
      case 'active':
        barColor = 'var(--color-active)';
        break;
      case 'inactive':
        barColor = 'var(--color-inactive)';
        break;
      case 'completed':
        barColor = 'var(--color-completed)';
        break;
      case 'testing':
        barColor = 'var(--color-testing)';
        break;
      case 'pending':
        barColor = 'var(--color-pending)';
        break;
      case 'canceled':
        barColor = 'var(--color-canceled)';
        break;
      case 'delayed':
        barColor = 'var(--color-delayed)';
        break;
    }

    return { status, projects, fill: barColor };
  });

  const chartConfig = {
    projects: {
      label: 'Projects',
    },
    active: {
      label: 'Active',
      color: 'hsl(var(--chart-1))',
    },
    inactive: {
      label: 'Inactive',
      color: 'hsl(var(--chart-2))',
    },
    completed: {
      label: 'Completed',
      color: 'hsl(var(--chart-3))',
    },
    testing: {
      label: 'Testing',
      color: 'hsl(var(--chart-4))',
    },
    pending: {
      label: 'Pending',
      color: 'hsl(var(--chart-5))',
    },
    canceled: {
      label: 'Canceled',
      color: 'hsl(var(--chart-1))',
    },
    delayed: {
      label: 'Delayed',
      color: 'hsl(var(--chart-2))',
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects - Bar</CardTitle>
        <CardDescription>Showing number of projects by status</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={projectsByStatusWithColor}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="status"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label.slice(
                  0,
                  3
                )
              }
            />
            <XAxis dataKey="projects" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="projects" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default ProjectsStatsBarChart;
