import { Form } from 'react-router-dom';
import { FormInput } from '@/components';

const AddNewProjectForm = () => {
  return (
    <div className="w-full p-4">
      <Form method="post" className="w-full grid place-items-center">
        <div className="w-full grid place-items-center break7:grid-cols-2">
          {/* left side form */}
          <div>left side</div>
          {/* right side form */}
          <div>right side</div>
        </div>
        {/* description */}
        <div></div>
      </Form>
    </div>
  );
};
export default AddNewProjectForm;
