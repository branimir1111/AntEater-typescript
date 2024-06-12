import { useLoaderData, Form, useSubmit, Link } from 'react-router-dom';
import { projectStatusFilter, projectSortFilter } from '@/utils';
import { FormSelect } from '@/components';
import { Button } from '@/components/ui/button';

type allPMProjectsQueryProps = {
  status: string;
  sort: string;
  page: string | number;
};

type PMProjectsFilterProps = {
  numOfPMProjects: number;
};

const PMProjectsFilter = ({ numOfPMProjects }: PMProjectsFilterProps) => {
  const searchParams = useLoaderData() as allPMProjectsQueryProps;
  const submit = useSubmit();
  const { status, sort } = searchParams;

  return (
    <div className="bg-background mt-6 p-4 rounded-md border">
      <h1>
        <span className="text-muted-foreground">Projects found:</span>{' '}
        {numOfPMProjects}
      </h1>
      <Form
        onChange={(e) => {
          submit(e.currentTarget);
        }}
        className="w-full mt-2 grid break6:grid-cols-2 gap-4 break13:grid-cols-3"
      >
        <FormSelect
          name="sort"
          label="Sort"
          options={projectSortFilter}
          defaultValue={sort}
        />
        <FormSelect
          name="status"
          label="Status"
          options={projectStatusFilter}
          defaultValue={status}
        />
        <Link to="/dashboard/manager">
          <Button className="w-full mt-4 break13:mt-7">Reset</Button>
        </Link>
      </Form>
    </div>
  );
};
export default PMProjectsFilter;
