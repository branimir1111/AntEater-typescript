import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';

const TicketsPage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['tickets'],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-tickets');
      return data;
    },
  });
  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  console.log(data);
  return (
    <section className="w-full outlet-hight p-4 bg-background-first">
      <h1 className="text-3xl">TicketsPage</h1>
    </section>
  );
};
export default TicketsPage;
