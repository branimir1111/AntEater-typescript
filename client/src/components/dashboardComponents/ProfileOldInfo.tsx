import { useAppSelector } from '@/utils';
import avatarLocale from '../../images/avatar.svg';

const ProfileOldInfo = () => {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <div
      id="old-info"
      className="grid sm:grid-cols-2 border-b-[1px] border-b-base-300 pb-4"
    >
      {/* Image */}
      <div
        id="picture-container"
        className="grid place-items-center sm:border-r-[1px] sm:border-r-base-300"
      >
        {user?.avatar ? (
          <img
            className="w-60 h-60 rounded-full object-cover"
            src={user?.avatar}
            alt="user picture"
          />
        ) : (
          <img
            className="w-60 h-60 rounded-full object-cover"
            src={avatarLocale}
            alt="user picture"
          />
        )}
      </div>
      {/* Info */}
      <div id="user-information" className="sm:pl-4">
        <h1 className="text-5xl font-bold font-poppins mb-4">Welcome</h1>
        <label
          htmlFor="firstName"
          className="font-poppins font-semibold text-xl text-base-content"
        >
          Your first name:
        </label>
        <h3
          id="lastName"
          className="mb-3 font-poppins font-light text-base-content"
        >
          {user?.firstName}
        </h3>
        <label
          htmlFor="lastName"
          className="font-poppins font-semibold text-xl text-base-content"
        >
          Your last name:
        </label>
        <h3
          id="lastName"
          className="mb-3 font-poppins font-light text-base-content"
        >
          {user?.lastName}
        </h3>
        <label
          htmlFor="email"
          className="font-poppins font-semibold text-xl text-base-content"
        >
          Your email:
        </label>
        <h3
          id="email"
          className="mb-3 font-poppins font-light text-base-content"
        >
          {user?.email}
        </h3>
        <label
          htmlFor="role"
          className="font-poppins font-semibold text-xl text-base-content"
        >
          Your role:
        </label>
        <h3 id="role" className="font-poppins font-light text-base-content">
          {user?.role}
        </h3>
      </div>
    </div>
  );
};
export default ProfileOldInfo;
