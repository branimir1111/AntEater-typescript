import { login, logout, register } from "../controllers/authControllers.js";
import {
  validateRegistration,
  validateLogin,
} from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

import { Router } from "express";

const router = Router();

router
  .route("/register")
  .post(upload.single("avatar"), validateRegistration, register);
router.route("/login").post(validateLogin, login);
router.route("/logout").get(logout);

export default router;
