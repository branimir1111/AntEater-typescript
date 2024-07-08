import { LabelList, Pie, PieChart } from 'recharts';
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

type TaskPriorityStatus = {
  priority: string;
  tasks: number;
};

type TasksStatsPriorityPieChartProps = {
  tasksByPriority: TaskPriorityStatus[];
};

const TasksStatsPriorityPieChart = ({
  tasksByPriority,
}: TasksStatsPriorityPieChartProps) => {
  const tasksByPriorityWithColor = tasksByPriority.map((task) => {
    const { priority, tasks } = task;

    let pieColor = '';
    switch (priority) {
      case 'high':
        pieColor = 'var(--color-high)';
        break;
      case 'medium':
        pieColor = 'var(--color-medium)';
        break;
      case 'low':
        pieColor = 'var(--color-low)';
        break;
    }

    return {
      priority,
      tasks,
      fill: pieColor,
    };
  });

  const chartConfig = {
    tasks: {
      label: 'Tasks',
    },
    high: {
      label: 'High',
      color: 'hsl(var(--chart-2))',
    },
    medium: {
      label: 'Medium',
      color: 'hsl(var(--chart-3))',
    },
    low: {
      label: 'Low',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tasks - Priority</CardTitle>
        <CardDescription>Number of tasks by priority</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="tasks" hideLabel />}
            />
            <Pie data={tasksByPriorityWithColor} dataKey="tasks">
              <LabelList
                dataKey="priority"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default TasksStatsPriorityPieChart;
