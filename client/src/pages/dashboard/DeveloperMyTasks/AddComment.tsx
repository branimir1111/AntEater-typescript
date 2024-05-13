import { redirect } from 'react-router-dom';

export const action = () => {
  console.log('This is ADD COMMENT action!!!');
  return redirect('/dashboard/my-tasks');
};
