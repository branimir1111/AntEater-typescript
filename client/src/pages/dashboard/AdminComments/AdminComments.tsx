import { customFetch } from '@/utils';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';
import {
  AdminTicketsFilter,
  AdminTicketsContainer,
  ComplexPagination,
  GlobalLoader,
  ErrorElement,
} from '@/components';

const AdminComments = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="bg-background p-4 rounded-md border">
            <div className="mb-8">
              <h1 className="text-3xl break13:text-5xl break13:font-semibold">
                Comments
              </h1>
              <h1 className="text-[#DE911D] mt-2">
                {/* {numOfAllTickets} tickets founded */}
                comments founded
              </h1>
            </div>

            {/* <ComplexPagination
              numOfPages={numOfPages}
              currentPage={currentPage}
            /> */}
          </div>
        </section>
      )}
    </>
  );
};
export default AdminComments;
