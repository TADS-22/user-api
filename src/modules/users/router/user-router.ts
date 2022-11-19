import { Router } from "express";
import { requestBodyValidator } from "../../commons/middlewares/validation";
import { userController } from "../controller";
import { createUserValiator, loginValidator } from "../validators";

const userRouter = Router()

userRouter.post('/',
  requestBodyValidator(createUserValiator), 
  userController.save,
)

userRouter.post('/login',
  requestBodyValidator(loginValidator),
  userController.login
)

export { userRouter };
