import {Express} from "express";
import "../config/loadEnv";
import {sequelize} from "../config/db";
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
}