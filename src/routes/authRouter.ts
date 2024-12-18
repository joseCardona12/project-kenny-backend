import {Router} from "express";
import AuthController from "../controllers/authController";
import {container} from "tsyringe";


export const authRouter:Router = Router();

authRouter.post("/login", AuthController.login);
authRouter.post("/register", AuthController.register);