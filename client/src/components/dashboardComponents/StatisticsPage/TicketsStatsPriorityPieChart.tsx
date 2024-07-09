import { useMemo } from 'react';
import { Label, Pie, PieChart } from 'recharts';
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

type TicketPriorityStatus = {
  priority: string;
  tickets: number;
};

type TicketsStatsPriorityPieChartProps = {
  ticketsByPriority: TicketPriorityStatus[];
};

const TicketsStatsPriorityPieChart = ({
  ticketsByPriority,
}: TicketsStatsPriorityPieChartProps) => {
  const ticketsByPriorityWithColor = ticketsByPriority.map((ticket) => {
    const { priority, tickets } = ticket;

    let pieColor = '';
    switch (priority) {
      case 'urgent':
        pieColor = 'var(--color-urgent)';
        break;
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
      tickets,
      fill: pieColor,
    };
  });

  const totalTickets = useMemo(() => {
    return ticketsByPriorityWithColor.reduce(
      (acc, curr) => acc + curr.tickets,
      0
    );
  }, []);

  const chartConfig = {
    tickets: {
      label: 'Tickets',
    },
    urgent: {
      label: 'Urgent',
      color: 'hsl(var(--chart-2))',
    },
    high: {
      label: 'High',
      color: 'hsl(var(--chart-4))',
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
        <CardTitle>Tickets - Priority</CardTitle>
        <CardDescription>Number of tickets by priority</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Pie
              data={ticketsByPriorityWithColor}
              dataKey="tickets"
              nameKey="priority"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalTickets.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Tickets
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default TicketsStatsPriorityPieChart;
