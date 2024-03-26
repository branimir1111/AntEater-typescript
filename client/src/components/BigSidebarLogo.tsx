import logo from '../images/anteater.svg';
import { twMerge } from 'tailwind-merge';

type BigSidebarLogoProps = {
  classIcon?: string;
  classText?: string;
};

const BigSidebarLogo = ({ classIcon, classText }: BigSidebarLogoProps) => {
  return (
    <div className="w-full py-2 grid place-items-center">
      <img
        src={logo}
        alt="anteater"
        className={twMerge(`w-8 rounded-full ${classIcon}`)}
      />
      <h1 className={twMerge(`text-2xl self-end ${classText}`)}>
        Ant<span className="text-yellow-400">E</span>ater
      </h1>
    </div>
  );
};
export default BigSidebarLogo;
