import { QueryClient, useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { GlobalLoader, TicketsFilter, TicketsContainer } from '@/components';
import { LoaderFunction, useLoaderData } from 'react-router-dom';

type allTicketsDevQueryProps = {
  ticketType: string;
  priority: string;
  status: string;
  page: string;
};

const allTicketsDevQuery = (params: allTicketsDevQueryProps) => {
  const { ticketType, priority, status, page } = params;
  return {
    queryKey: [
      'tickets',
      ticketType ?? 'all',
      priority ?? 'all',
      status ?? 'all',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-tickets', { params });
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    await queryClient.ensureQueryData(
      allTicketsDevQuery(params as allTicketsDevQueryProps)
    );

    return { ...params };
  };

const TicketsPage = () => {
  const searchParams = useLoaderData() as allTicketsDevQueryProps;

  const {
    data: tickets,
    isPending: isPendingTickets,
    isError: isErrorTickets,
  } = useQuery(allTicketsDevQuery(searchParams));

  if (isPendingTickets) {
    return <GlobalLoader />;
  }
  if (isErrorTickets) {
    return <h1>Error...</h1>;
  }

  const allTickets = tickets.filteredTickets;
  const numOfPages = tickets.numOfPages;
  const currentPage = tickets.currentPage;
  const numOfTickets = tickets.numOfTickets;

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
        Tickets
      </h2>
      <div className="m-auto w-40 h-1 bg-gray-500 mb-8 rounded-sm"></div>
      <div className="w-full grid break9:flex gap-4">
        <TicketsFilter />
        <TicketsContainer
          allTickets={allTickets}
          numOfPages={numOfPages}
          currentPage={currentPage}
          numOfTickets={numOfTickets}
        />
      </div>
    </section>
  );
};
export default TicketsPage;
