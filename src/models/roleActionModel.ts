import {AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {RoleModel} from "./roleModel";
import {ActionModel} from "./actionModel";

@Table({
    tableName: 'role_actions',
    timestamps: false,
})
export class RoleActionModel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!:number;

    @ForeignKey(()=>RoleModel)
    @Column({
        type:DataType.INTEGER,
    })
    role_id!:number;

    @ForeignKey(()=>ActionModel)
    @Column({
        type:DataType.INTEGER,
    })
    action_id!:number;
}