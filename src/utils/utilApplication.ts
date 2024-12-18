import {Express} from "express";
import "../config/loadEnv";
export class UtilApplication{

    public static async startServer(app:Express,port:string):Promise<void>{
        console.log("Starting server...");
        app.listen(port,()=>console.log(`Server started on the port ${port}`));
    };

    public static verifyExistsParameters(...values: (string | number)[]):boolean{
        return values.every(value=>value);
    };
}