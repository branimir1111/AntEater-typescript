import { Link, Form } from 'react-router-dom';
import logo from '../images/anteater.svg';
import { FormInput, SubmitBtn } from '@/components';

export const action = () => {};

const LoginPage = () => {
  return (
    <main className="w-full min-h-screen grid place-items-center bg-[url('./images/WorldMap.svg')] bg-no-repeat bg-cover lg:grid-cols-2">
      <div className="w-11/12 bg-cyan-950 drop-shadow-2xl p-6 grid place-items-center rounded-[5px] sm:w-[400px]">
        <div className="w-[60px] h-[60px] mb-4 p-1 bg-cyan-50 hover:bg-yellow-200 transition-all duration-300 rounded-full md:w-[70px]  md:h-[70px]">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h1 className="text-3xl mt-2 mb-2 text-white md:text-4xl">
          Ant<span className="text-yellow-400">E</span>ater
        </h1>
        <h1 className="mb-4 text-white text-2xl">Login</h1>
        <Form method="post" className="w-full grid place-items-center">
          <FormInput
            name="email"
            type="email"
            label="E-mail"
            labelClass="text-white"
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            labelClass="text-white"
          />
          <SubmitBtn
            text="Login"
            className="bg-cyan-200 w-full text-cyan-700 mt-4 hover:bg-yellow-300 transition-all duration-300 md:text-xl"
          />
          {/* <FormRow
            labelText={'Email'}
            labelClassName={'text-white'}
            type={'email'}
            name={'email'}
            className={'px-2 py-2 rounded-[3px] bg-slate-50 text-black'}
            placeholder={'Your email'}
            refElement={refElement}
          /> */}
          {/* <FormRow
            layout={'relative mt-4'}
            labelText={'password'}
            labelClassName={'text-white'}
            type={`${viewPass ? 'text' : 'password'}`}
            name={'password'}
            className={'px-2 py-2 rounded-[3px] bg-slate-50 text-black'}
            placeholder={'Your password'}
            viewIcon={
              viewPass ? (
                <PiEyeClosedBold
                  onClick={handleViewPass}
                  className="absolute text-[1.3rem] text-[#08334496] hover:text-[#083344] right-[1rem] bottom-[0.6rem] cursor-pointer transition-all duration-300"
                />
              ) : (
                <PiEyeBold
                  onClick={handleViewPass}
                  className="absolute text-[1.3rem] text-[#08334496] hover:text-[#083344] right-[1rem] bottom-[0.6rem] cursor-pointer transition-all duration-300"
                />
              )
            }
          /> */}
          {/* <button
            type="submit"
            className="bg-cyan-200 w-full  text-cyan-700 text-xl mt-4 py-1 px-2 rounded-[3px] hover:bg-yellow-300 transition-all duration-300 md:text-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Login'}
          </button> */}
          <h1 className="text-white mt-[1rem]">
            Don't have account?{' '}
            <span className="text-yellow-300 hover:text-yellow-500 transition-all duration-200">
              <Link to="/register">Register</Link>
            </span>
          </h1>
          <h1 className="text-white text-center mt-[1rem]">OR</h1>
        </Form>
        {/* <div className="w-full">
          <div className="flex gap-[1rem]">
            <button
              type="button"
              onClick={() => handleDemoUser('admin@gmail.com', 'admin1288809')}
              className="bg-cyan-500 text-cyan-700 w-full text-xl mt-4 py-1 px-2 rounded-[3px] hover:bg-yellow-300 transition-all duration-300 md:text-xl"
            >
              <span className="text-cyan-900">Demo</span> Admin
            </button>
            <button
              type="button"
              onClick={() =>
                handleDemoUser(
                  'projectmanager@gmail.com',
                  'projectmanager1288809'
                )
              }
              className="bg-cyan-500 w-full text-cyan-700 text-xl mt-4 py-1 px-2 rounded-[3px] hover:bg-yellow-300 transition-all duration-300 md:text-xl"
            >
              <span className="text-cyan-900">Demo</span> PM
            </button>
          </div>
          <button
            type="button"
            onClick={() =>
              handleDemoUser('developer@gmail.com', 'developer1288809')
            }
            className="bg-cyan-500 w-full text-cyan-700 text-xl mt-4 py-1 px-2 rounded-[3px] hover:bg-yellow-300 transition-all duration-300 md:text-xl"
          >
            <span className="text-cyan-900">Demo</span> Developer
          </button>
        </div> */}
      </div>
      <div className="hidden lg:block"></div>
    </main>
  );
};
export default LoginPage;
