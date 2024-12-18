import {Request, Response} from "express";
import {UtilApplication} from "../utils/utilApplication";
import {AuthControllerPort} from "../ports";

class AuthController implements AuthControllerPort{

    public async login(req:Request, res:Response):Promise<void> {
        const {name,phone_number, role_id = 2,level_id = 1, email, password} = req.body;
        const existsParametersVerify = UtilApplication.verifyExistsParameters(
            name,
            phone_number,
            email,
            password
        );

        if(!existsParametersVerify){
            res.status(400).json({
                message: "Error to try login. Is necessary all parameters for login!"
            });
            return;
        };



        console.log(`Exists parameters: ${existsParametersVerify} ${role_id} ${level_id}`);
    };

    public async register():Promise<void>   {
        console.log("Register");
    };
}

export default new AuthController();
