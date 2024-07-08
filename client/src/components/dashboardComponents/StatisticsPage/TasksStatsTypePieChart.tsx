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
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type TaskTypeStatus = {
  taskType: string;
  tasks: number;
};

type TasksStatsTypePieChartProps = {
  tasksByType: TaskTypeStatus[];
};

const TasksStatsTypePieChart = ({
  tasksByType,
}: TasksStatsTypePieChartProps) => {
  const tasksByTypeWithColor = tasksByType.map((task) => {
    const { taskType, tasks } = task;

    let pieColor = '';

    switch (taskType) {
      case 'planning':
        pieColor = 'var(--color-planning)';
        break;
      case 'design':
        pieColor = 'var(--color-design)';
        break;
      case 'coding':
        pieColor = 'var(--color-coding)';
        break;
      case 'testing':
        pieColor = 'var(--color-testing)';
        break;
      case 'administration':
        pieColor = 'var(--color-administration)';
        break;
    }

    return {
      taskType,
      tasks,
      fill: pieColor,
    };
  });

  const chartConfig = {
    tasks: {
      label: 'Tasks',
    },
    planning: {
      label: 'Planning',
      color: 'hsl(var(--chart-1))',
    },
    design: {
      label: 'Design',
      color: 'hsl(var(--chart-2))',
    },
    coding: {
      label: 'Coding',
      color: 'hsl(var(--chart-3))',
    },
    testing: {
      label: 'Testing',
      color: 'hsl(var(--chart-4))',
    },
    administration: {
      label: 'Administration',
      color: 'hsl(var(--chart-5))',
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="items-center pb-2">
        <CardTitle>Tasks - Type</CardTitle>
        <CardDescription>Number of tasks by type</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="tasks" hideLabel />}
            />
            <Pie
              data={tasksByTypeWithColor}
              dataKey="tasks"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {`${
                      chartConfig[payload.taskType as keyof typeof chartConfig]
                        ?.label
                    } (${payload.tasks})`}
                  </text>
                );
              }}
              nameKey="taskType"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default TasksStatsTypePieChart;
