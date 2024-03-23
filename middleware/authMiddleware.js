import { verifyJWT } from "../utils/tokenUtils.js";
import { Unauthenticated, Unauthorized } from "../errors/customErrors.js";

const authenticateUser = (req, res, next) => {
  const { ant_eater } = req.cookies;
  if (!ant_eater) {
    throw new Unauthenticated("You must be logged in");
  }
  try {
    const { userId, role, firstName, lastName } = verifyJWT(ant_eater);
    req.user = { userId, role, firstName, lastName };
    next();
  } catch (error) {
    throw new Unauthenticated("authentication invalid");
  }
};

const authorizePermissions = (...roles) => {
  return (req, next) => {
    if (!roles.includes(req.user.role)) {
      throw new Unauthorized("You don't have access to this route");
    }
    next();
  };
};

export { authenticateUser, authorizePermissions };
