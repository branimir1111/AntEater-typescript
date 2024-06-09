import { StatusCodes } from 'http-status-codes';

const getAllPMProjects = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is getAllPMProjects controller' });
};

export { getAllPMProjects };
