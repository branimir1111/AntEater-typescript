import { Pie, PieChart } from 'recharts';
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type TaskStatus = {
  status: string;
  tasks: number;
};

type TasksStatsStatusPieChart = {
  tasksByStatus: TaskStatus[];
};

const TasksStatsStatusPieChart = ({
  tasksByStatus,
}: TasksStatsStatusPieChart) => {
  const tasksByStatusWithColor = tasksByStatus.map((task) => {
    const { status, tasks } = task;

    let pieColor = '';

    switch (status) {
      case 'new':
        pieColor = 'var(--color-new)';
        break;
      case 'in-progress':
        pieColor = 'var(--color-in-progress)';
        break;
      case 'under-review':
        pieColor = 'var(--color-under-review)';
        break;
      case 'refactor':
        pieColor = 'var(--color-refactor)';
        break;
      case 'completed':
        pieColor = 'var(--color-completed)';
        break;
    }

    return {
      status,
      tasks,
      fill: pieColor,
    };
  });

  const chartConfig = {
    tasks: {
      label: 'Tasks',
    },
    new: {
      label: 'New',
      color: 'hsl(var(--chart-1))',
    },
    'in-progress': {
      label: 'In progress',
      color: 'hsl(var(--chart-2))',
    },
    'under-review': {
      label: 'Under review',
      color: 'hsl(var(--chart-3))',
    },
    refactor: {
      label: 'Refactor',
      color: 'hsl(var(--chart-4))',
    },
    completed: {
      label: 'Completed',
      color: 'hsl(var(--chart-5))',
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tasks - Status</CardTitle>
        <CardDescription>Number of tasks by status</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[300px]">
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="tasks" hideLabel />}
            />
            <Pie data={tasksByStatusWithColor} dataKey="tasks" />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default TasksStatsStatusPieChart;
