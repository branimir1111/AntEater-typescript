import { Link } from 'react-router-dom';
import logo from '../images/anteater.svg';
const LogoForAuth = ({ text }: { text: string }) => {
  return (
    <>
      <div className="w-[60px] h-[60px] mb-4 p-1 bg-cyan-50 hover:bg-yellow-200 transition-all duration-300 rounded-full md:w-[70px]  md:h-[70px]">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <h1 className="text-3xl mt-2 mb-2 text-white md:text-4xl">
        Ant<span className="text-yellow-400">E</span>ater
      </h1>
      <h1 className="mb-4 text-white text-2xl capitalize">{text}</h1>
    </>
  );
};
export default LogoForAuth;
