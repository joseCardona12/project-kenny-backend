import {injectable} from "tsyringe";
import {UserModel} from "@models/userModel";
import {AuthPort} from "@ports/auth/authPort";

@injectable()
export class AuthRepository implements AuthPort{

    public async login(data:Partial<UserModel>):Promise<UserModel | null>{
        return await UserModel.findOne({
            where: {
                phone_number: data.phone_number,
                password:data.password,
            }
        })
    }
}
