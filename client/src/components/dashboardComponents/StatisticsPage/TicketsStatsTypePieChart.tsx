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

type TicketTypeStatus = {
  ticketType: string;
  tickets: number;
};

type TicketsStatsTypePieChartProps = {
  ticketsByType: TicketTypeStatus[];
};

const TicketsStatsTypePieChart = ({
  ticketsByType,
}: TicketsStatsTypePieChartProps) => {
  const ticketsByTypeWithColor = ticketsByType.map((ticket) => {
    const { ticketType, tickets } = ticket;

    let pieColor = '';

    switch (ticketType) {
      case 'feature':
        pieColor = 'var(--color-feature)';
        break;
      case 'improvement':
        pieColor = 'var(--color-improvement)';
        break;
      case 'security':
        pieColor = 'var(--color-security)';
        break;
      case 'bug':
        pieColor = 'var(--color-bug)';
        break;
    }

    return {
      ticketType,
      tickets,
      fill: pieColor,
    };
  });

  const chartConfig = {
    tickets: {
      label: 'Tickets',
    },
    feature: {
      label: 'Feature',
      color: 'hsl(var(--chart-1))',
    },
    improvement: {
      label: 'Improvement',
      color: 'hsl(var(--chart-4))',
    },
    security: {
      label: 'Security',
      color: 'hsl(var(--chart-3))',
    },
    bug: {
      label: 'Bug',
      color: 'hsl(var(--chart-2))',
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tickets - Type</CardTitle>
        <CardDescription>Number of tickets by type</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Pie
              data={ticketsByTypeWithColor}
              dataKey="tickets"
              nameKey="ticketType"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default TicketsStatsTypePieChart;
