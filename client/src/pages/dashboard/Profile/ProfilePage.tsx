import {
  Form,
  useNavigate,
  redirect,
  type ActionFunction,
} from 'react-router-dom';
import { useAppSelector, customFetch } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { AxiosError, AxiosResponse } from 'axios';
import { ProfileOldInfo, FormInput, SubmitBtn } from '@/components';
import { Button } from '@/components/ui/button';
import { ReduxStore } from '@/features/store';
import { updateUser } from '@/features/user/userSlice';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { QueryClient } from '@tanstack/react-query';

export const action =
  (store: ReduxStore, queryClient: QueryClient): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const file = formData.get('avatar') as FormDataEntryValue & {
      size: number;
    };
    if (file && file.size > 1000000) {
      toast({ description: 'Image too large' });
      return null;
    }
    try {
      const response: AxiosResponse = await customFetch.patch(
        '/update-user',
        formData
      );
      store.dispatch(updateUser(response.data.user));
      await queryClient.invalidateQueries({
        queryKey: ['projects'],
      });
      toast({ description: response.data.msg });
      return redirect('/dashboard/profile');
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Update Failed';
      toast({ description: errorMsg });
      return null;
    }
  };

const ProfilePage = () => {
  const user = useAppSelector((state) => state.userState.user);
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    try {
      const response: AxiosResponse = await customFetch.delete('/delete-user');
      toast({ description: response.data.msg });
      navigate('/');
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Delete Failed';
      toast({ description: errorMsg });
      return null;
    }
  };

  return (
    <section className="w-full outlet-hight p-4 bg-background-first grid place-items-center">
      <div
        id="main-container"
        className="w-full max-w-5xl bg-background p-8 pb-4 rounded-md border-[1px]"
      >
        <ProfileOldInfo />
        {/* EDIT profile */}
        <div
          id="edit-profile"
          className="w-full grid place-items-center border-b-[1px] pb-4 border-b-base-300"
        >
          <h1 className="w-full max-sm:text-center self-start text-4xl md:text-5xl font-bold font-poppins my-4">
            Edit your profile
          </h1>
          <Form
            method="post"
            className="w-full grid place-items-center"
            encType="multipart/form-data"
          >
            {/* firstName & lastName */}
            <div className="grid gap-4 sm:grid-cols-2 w-full">
              {/* firstName */}
              <FormInput
                type="text"
                name="firstName"
                label="Edit your first name"
                defaultValue={user?.firstName}
                inputClass="w-full max-w-xs bg-input"
              />
              {/* lastName */}
              <FormInput
                type="text"
                name="lastName"
                label="Edit your last name"
                defaultValue={user?.lastName}
                inputClass="w-full max-w-xs bg-input"
              />
            </div>
            {/* email & picture */}
            <div className="grid gap-4 sm:grid-cols-2 w-full pt-4">
              {/* email */}
              <FormInput
                type="email"
                name="email"
                label="Edit your email"
                defaultValue={user?.email}
                inputClass="w-full max-w-xs bg-input"
              />
              {/* picture */}
              <FormInput
                type="file"
                name="avatar"
                label="Select picture ( max 1 MB )"
                inputClass="w-full max-w-xs bg-input"
              />
            </div>
            {/* submit button */}
            <div className="w-full grid gap-4 sm:grid-cols-2">
              <div></div>
              <SubmitBtn
                text="Confirm"
                className="w-full max-w-xs uppercase sm:mt-2"
              />
            </div>
          </Form>
        </div>
        {/* DELETE profile START*/}
        <div className="w-full grid max-md:place-items-center place-items-start pt-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                variant="destructive"
                size="lg"
                className="uppercase"
              >
                delete profile
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteUser}>
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        {/* DELETE profile END*/}
      </div>
    </section>
  );
};
export default ProfilePage;
