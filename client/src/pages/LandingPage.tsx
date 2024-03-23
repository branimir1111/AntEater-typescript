import { Link } from 'react-router-dom';
import logo from '../images/anteater.svg';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  return (
    <main className="w-full h-screen grid place-items-center bg-[url('./images/PolygonLuminary.svg')] bg-no-repeat bg-cover md:relative">
      <div className="w-11/12 bg-cyan-950 drop-shadow-2xl p-6 grid place-items-center rounded-[5px] sm:w-[400px] md:absolute md:top-[20%] md:left-[20%]">
        <div className="w-[60px] h-[60px] mb-4 p-1 bg-cyan-50 rounded-full md:w-[70px]  md:h-[70px]">
          <img src={logo} alt="logo" className="" />
        </div>
        <h1 className="text-3xl mt-2 mb-2 text-white md:text-4xl">
          Ant<span className="text-yellow-400">E</span>ater
        </h1>
        <h1 className="mb-4 text-white text-xl">Bug Trucker App</h1>
        <Button
          asChild
          variant="secondary"
          className="bg-cyan-100 text-cyan-600 text-xl py-1 px-2 rounded-[3px] hover:bg-yellow-300 transition-all duration-300 md:text-xl"
        >
          <Link to="login">
            <span className="text-cyan-800">Try</span> AntEater{' '}
            <span className="text-cyan-800">Now!</span>
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default LandingPage;
