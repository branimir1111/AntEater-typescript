import { StatusCodes } from "http-status-codes";

// 400
export class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

// 401
export class Unauthorized extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

// 403
export class Unauthenticated extends Error {
  constructor(message) {
    super(message);
    this.name = "Unauthenticated";
    this.StatusCode = StatusCodes.FORBIDDEN;
  }
}
// 404
export class NotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFound";
    this.StatusCode = StatusCodes.NOT_FOUND;
  }
}
