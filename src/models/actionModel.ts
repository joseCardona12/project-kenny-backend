import {AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import {RoleActionModel} from "./roleActionModel";

@Table({
    tableName: "actions",
    timestamps: false,
})
export class ActionModel extends Model{
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
    roleActions!:RoleActionModel[];
}