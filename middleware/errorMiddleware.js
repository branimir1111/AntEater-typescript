import { StatusCodes } from "http-status-codes";

const errorMiddleware = (err, req, res, next) => {
  const StatusCode = err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong, try again later";
  res.status(StatusCode).json({ msg });
};

export default errorMiddleware;
