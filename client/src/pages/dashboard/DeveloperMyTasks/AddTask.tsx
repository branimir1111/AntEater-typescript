import { redirect } from 'react-router-dom';

export const action = () => {
  console.log('This is ADD TASK action!!!');
  return redirect('/dashboard/my-tasks');
};
