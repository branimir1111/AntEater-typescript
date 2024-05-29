type ProjectCartCommentsProps = {
  _id: string;
  projectName: string;
  status: string;
  setSingleProjectId: React.Dispatch<React.SetStateAction<string>>;
};

const ProjectCartComments = ({
  _id,
  projectName,
  status,
  setSingleProjectId,
}: ProjectCartCommentsProps) => {
  return (
    <article
      className={`w-full border cursor-pointer`}
      onClick={() => setSingleProjectId(_id)}
    >
      <h1>{projectName}</h1>
      <h1>{status}</h1>
    </article>
  );
};
export default ProjectCartComments;
