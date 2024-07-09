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

type TicketStatus = {
  status: string;
  tickets: number;
};

type TicketsStatsStatusPieChartProps = {
  ticketsByStatus: TicketStatus[];
};

const TicketsStatsStatusPieChart = ({
  ticketsByStatus,
}: TicketsStatsStatusPieChartProps) => {
  const ticketsByStatusWithColor = ticketsByStatus.map((ticket) => {
    const { status, tickets } = ticket;

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
      case 'rejected':
        pieColor = 'var(--color-rejected)';
        break;
      case 'cancelled':
        pieColor = 'var(--color-cancelled)';
        break;
      case 'completed':
        pieColor = 'var(--color-completed)';
        break;
    }
    return {
      status,
      tickets,
      fill: pieColor,
    };
  });

  const chartConfig = {
    tickets: {
      label: 'Tickets',
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
    rejected: {
      label: 'Rejected',
      color: 'hsl(var(--chart-4))',
    },
    cancelled: {
      label: 'Cancelled',
      color: 'hsl(var(--chart-5))',
    },
    completed: {
      label: 'Completed',
      color: 'hsl(var(--chart-3))',
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Tickets - Status</CardTitle>
        <CardDescription>Number of tickets by status</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={ticketsByStatusWithColor}
              dataKey="tickets"
              label
              nameKey="status"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default TicketsStatsStatusPieChart;
