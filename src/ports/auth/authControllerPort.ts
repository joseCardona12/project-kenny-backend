import {Request, Response} from "express";

export interface AuthControllerPort{
    login(req:Request, res:Response):Promise<void>
    //register():Promise<void>;
}