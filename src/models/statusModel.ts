import {AutoIncrement, Column, DataType, HasOne, Model, PrimaryKey, Table} from "sequelize-typescript";
import {ProductModel} from "./productModel";
import {TaskModel} from "./taskModel";

@Table({
    tableName: "status",
    timestamps: false
})
export class StatusModel extends Model{
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

    @HasOne(()=>TaskModel)
    task!:TaskModel;
}