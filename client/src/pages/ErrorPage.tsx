import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="w-full grid place-items-center min-h-screen bg-[url('./images/errorHexagon.svg')] bg-no-repeat bg-cover py-4">
        <div className="grid place-items-center">
          <h1 className="text-6xl sm:text-9xl text-[#FDE047] font-bold">
            4<span className="text-white">0</span>4
          </h1>
          <h1 className="text-3xl sm:text-6xl text-white mt-2 font-bold text-center">
            Page not found
          </h1>
          <p className="text-sm sm:text-xl text-white mt-4 mb-8 text-center">
            Sorry, we couldn't find page that you are looking for
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="hover:bg-[#FDE047] transition-all duration-200 px-10 uppercase text-[0.8rem] sm:text-[1rem]"
          >
            <Link to="/">Go back</Link>
          </Button>
        </div>
      </main>
    );
  }
  console.log(error);
  return (
    <main className="w-full grid place-items-center min-h-screen bg-[url('./images/errorHexagon.svg')] bg-no-repeat bg-cover py-4">
      <div className="grid place-items-center">
        <h1 className="text-xl sm:text-4xl text-white mb-8 font-bold">
          Something went wrong...
        </h1>
        <Link
          to="/"
          className="btn hover:bg-[#FDE047] transition-all duration-200 px-10 uppercase text-[0.8rem] sm:text-[1rem]"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
