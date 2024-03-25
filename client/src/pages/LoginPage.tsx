import {
  Link,
  Form,
  useNavigate,
  type ActionFunction,
  redirect,
} from 'react-router-dom';
import { FormInput, SubmitBtn, LogoForAuth } from '@/components';
import { customFetch, useAppDispatch } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { type ReduxStore } from '@/features/store';
import { loginUser } from '@/features/user/userSlice';
import { AxiosResponse, AxiosError } from 'axios';
import { Button } from '@/components/ui/button';
import { type QueryClient } from '@tanstack/react-query';

export const action =
  (store: ReduxStore, queryClient: QueryClient): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response: AxiosResponse = await customFetch.post('/login', data);
      // const loggedUser = response.data.user;
      const loggedUser = response.data;
      console.log(loggedUser);

      queryClient.invalidateQueries();
      store.dispatch(loginUser(loggedUser));
      toast({ description: response.data.msg });
      return redirect('/dashboard');
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError ? error.response?.data.msg : 'Login Failed';
      toast({ description: errorMsg });
      return null;
    }
  };

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDemoUser = async (
    email: string,
    password: string
  ): Promise<void> => {
    const response = await customFetch.post('/login', {
      email,
      password,
    });
    const user = response.data.user;
    toast({ description: response.data.msg });
    dispatch(loginUser(user));
    navigate('/dashboard');
  };

  return (
    <main className="w-full min-h-screen grid place-items-center bg-[url('./images/WorldMap.svg')] bg-no-repeat bg-cover lg:grid-cols-2">
      <div className="w-11/12 bg-cyan-950 drop-shadow-2xl p-6 grid place-items-center rounded-[5px] sm:w-[400px]">
        <LogoForAuth text="login" />
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
          <h1 className="text-white mt-[1rem]">
            Don't have account?{' '}
            <span className="text-yellow-300 hover:text-yellow-500 transition-all duration-200">
              <Link to="/register">Register</Link>
            </span>
          </h1>
          <h1 className="text-white text-center mt-[1rem]">OR</h1>
        </Form>
        <div className="w-full">
          <div className="grid place-items-center break4:flex break4:gap-[1rem]">
            <Button
              className="bg-cyan-500 text-cyan-700 w-full mt-4 hover:bg-yellow-300 md:text-xl"
              onClick={() => handleDemoUser('admin@gmail.com', 'admin1288809')}
            >
              Demo <span className="text-cyan-900">Admin</span>
            </Button>
            <Button
              className="bg-cyan-500 text-cyan-700 w-full mt-4 hover:bg-yellow-300 md:text-xl"
              onClick={() =>
                handleDemoUser(
                  'projectmanager@gmail.com',
                  'projectmanager1288809'
                )
              }
            >
              Demo <span className="text-cyan-900">PM</span>
            </Button>
          </div>
          <Button
            className="bg-cyan-500 text-cyan-700 w-full mt-4 hover:bg-yellow-300 md:text-xl"
            onClick={() =>
              handleDemoUser('developer@gmail.com', 'developer1288809')
            }
          >
            Demo <span className="text-cyan-900">Developer</span>
          </Button>
        </div>
      </div>
      <div className="hidden lg:block"></div>
    </main>
  );
};
export default LoginPage;
