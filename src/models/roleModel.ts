import {AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import {RoleActionModel} from "./roleActionModel";
import {UserModel} from "./userModel";

@Table({
    tableName: "roles",
    timestamps: false
})
export class RoleModel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!:number;

    @Column({
        type:DataType.STRING(100),
    })
    name!:string;

    @HasMany(()=>RoleActionModel)
    roleActions!: RoleActionModel[];

    @HasMany(()=>UserModel)
    users!:UserModel[];
}