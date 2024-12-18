import {Request, Response} from "express";
import {UtilApplication} from "@utils/utilApplication";
import {AuthControllerPort} from "@ports/auth/authControllerPort";
import {container} from "tsyringe";
import {AuthService} from "@services/authService";
import {AuthPort} from "@ports/auth/authPort";
import {UserModel} from "@models/userModel";
import jwt from "jsonwebtoken";
import {SECRET} from "@config/loadEnv";

class AuthController implements AuthControllerPort{

    public login = async (req:Request, res:Response):Promise<void> => {
        const {phone_number,password} = req.body;
        const verifyParameters:boolean = UtilApplication.verifyExistsParameters(phone_number,password);

        if(!verifyParameters){
            res.status(400).json({
                message: "Error. Is necessary all params"
            });
            return ;
        }

        const authService:AuthPort = container.resolve(AuthService);
        const userFound = await authService.login({
            phone_number,
            password,
        });
        if(!userFound){
            res.status(401).json({
                message:"User not found"
            });
        }
        const tokenGenerate:string = this.generateToken({
            phone_number,
            password
        });
        res.status(200).json({
            token: tokenGenerate,
            user: userFound
        });
    };

    public register = async():Promise<void> =>   {
        console.log("Register");
    };

    private generateToken = (user: {
        phone_number: string,
        password: string,
    }):string =>{
        return jwt.sign(user,SECRET, {expiresIn: "1h"});
    };
}

export default new AuthController();
