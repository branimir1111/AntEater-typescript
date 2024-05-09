import { TaskResponse } from '@/utils';

type SingleTaskCartProps = {
  task: TaskResponse;
};

const SingleTaskCart = ({ task }: SingleTaskCartProps) => {
  const { title } = task;
  return (
    <article className="w-full h-16 bg-background-first rounded-sm border">
      {title}
    </article>
  );
};
export default SingleTaskCart;
