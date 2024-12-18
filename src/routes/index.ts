import {Router} from "express";
import {authRouter} from "./authRouter";

export const router:Router = Router();
router.use("/auth", authRouter);
