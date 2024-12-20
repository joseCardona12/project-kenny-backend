import {UserModel} from "@models/index";

export interface AuthPort {
    login(data:Partial<UserModel>):Promise<UserModel | null>
    register(data:Partial<UserModel>):Promise<UserModel | null>
}