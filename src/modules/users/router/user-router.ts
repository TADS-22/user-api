import { Router } from "express";
import { requestBodyValidator } from "../../commons/middlewares/validation";
import { userController } from "../controller";
import { createUserValiator } from "../validators";

const userRouter = Router()

userRouter.post('/',
  requestBodyValidator(createUserValiator), 
  userController.save,
)

export { userRouter };
