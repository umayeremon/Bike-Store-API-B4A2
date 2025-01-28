import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { authValidations } from "./auth.validation";
import { AuthControllers } from "./auth.controller";

const router = Router();

router.post(
  "/login",
  validateRequest(authValidations.registerUserValidationSchema),
  AuthControllers.login,
);

export const AuthRoutes = router;
