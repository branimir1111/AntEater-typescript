import { Link, Form, redirect, ActionFunction } from 'react-router-dom';
import { FormInput, SubmitBtn, LogoForAuth } from '@/components';
import { customFetch } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { AxiosError } from 'axios';

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/register', data);
    toast({ description: response.data.msg });
    return redirect('/login');
  } catch (error) {
    const errorMsg =
      error instanceof AxiosError
        ? error.response?.data.msg
        : 'Registration Failed';
    toast({ description: errorMsg });
    return null;
  }
};

const RegisterPage = () => {
  return (
    <main className="w-full min-h-screen grid place-items-center bg-[url('./images/WorldMap.svg')] bg-no-repeat bg-cover lg:grid-cols-2">
      <div className="w-11/12 bg-cyan-950 drop-shadow-2xl p-6 grid place-items-center rounded-[5px] sm:w-[400px]">
        <LogoForAuth text="register" />
        <Form method="post" className="w-full grid place-items-center">
          <FormInput
            name="firstName"
            type="text"
            label="First Name"
            labelClass="text-white"
            inputClass="bg-white text-black"
          />
          <FormInput
            name="lastName"
            type="text"
            label="Last Name"
            labelClass="text-white"
            inputClass="bg-white text-black"
          />
          <FormInput
            name="email"
            type="email"
            label="E-mail"
            labelClass="text-white"
            inputClass="bg-white text-black"
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            labelClass="text-white"
            inputClass="bg-white text-black"
          />
          <SubmitBtn
            text="Register"
            className="bg-cyan-200 w-full text-cyan-700 mt-4 hover:bg-yellow-300 transition-all duration-300 md:text-xl"
          />
        </Form>
        <h1 className="text-white mt-[1rem]">
          Already have account?{' '}
          <span className="text-yellow-300 hover:text-yellow-500 transition-all duration-200">
            <Link to="/login" className="underline underline-offset-2">
              Login
            </Link>
          </span>
        </h1>
      </div>
      <div className="hidden lg:block"></div>
    </main>
  );
};
export default RegisterPage;
