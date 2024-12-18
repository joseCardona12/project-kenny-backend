import {AuthPort} from "@ports/auth/authPort";
import {inject, injectable} from "tsyringe";
import {AuthRepository} from "@repositories/authRepository";
import {UserModel} from "@models/userModel";

@injectable()
export class AuthService implements AuthPort{
    constructor(@inject(AuthRepository) private authRepository:AuthPort) {}
    public async login(data:Partial<UserModel>):Promise<UserModel | null> {
        const userFound:UserModel | null = await this.authRepository.login(data);
        if(!userFound)return null;
        return userFound;
    }
}