import {AuthPort} from "@ports/auth/authPort";
import {inject, injectable} from "tsyringe";
import {AuthRepository} from "@repositories/authRepository";
import {UserModel} from "@models/userModel";
import {UtilApplication} from "@utils/utilApplication";

@injectable()
export class AuthService implements AuthPort{
    constructor(@inject(AuthRepository) private authRepository:AuthPort) {}
    public async login(data:Partial<UserModel>):Promise<UserModel | null> {
        return await this.authRepository.login(data);
    }
    public async register(data: Partial<UserModel>): Promise<UserModel | null> {
        return await this.authRepository.register({
            phone_number: data?.phone_number,
            password: await UtilApplication.encrypPassword(data?.password!),
            email: data?.email,
            name: data?.name,
            url_image: data?.url_image,
            role_id: data?.role_id,
            level_id: data?.level_id,
        });
    }

}