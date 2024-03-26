import logo from '../images/anteater.svg';

const BigSidebarLogo = () => {
  return (
    <div className="w-full py-2 grid place-items-center">
      <img src={logo} alt="anteater" className="w-8 bg-white rounded-full" />
      <h1 className="text-base-content text-2xl self-end">
        Ant<span className="text-yellow-400">E</span>ater
      </h1>
    </div>
  );
};
export default BigSidebarLogo;
