import {Express} from "express";
import {sequelize} from "@config/db";
import bcrypt from "bcrypt";
export class UtilApplication{

    public static async startServer(app:Express,port:string):Promise<void>{
        await sequelize.authenticate();
        console.log("Trying to start server...");
        await sequelize.sync();
        console.log("Connect database with the models...");
        app.listen(port,()=>console.log(`Server started on the port ${port}`));
    };

    public static verifyExistsParameters(...values: (string | number)[]):boolean{
        return values.every(value=>value);
    };

    public static isFalseParameters(phone_number:string | undefined,email:string | undefined):string | undefined{

        if(!phone_number){
            return email;
        }
        return phone_number;
    };

    public static async encrypPassword(password:string):Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    };

    public static async verifyPassword(passwordUser:string, passwordSave:string):Promise<boolean>{
        return await bcrypt.compare(passwordUser, passwordSave);
    }
}