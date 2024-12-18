import {AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {UserModel} from "./userModel";
import {StatusModel} from "./statusModel";

@Table({
    tableName: "tasks",
    timestamps: false
})
export class TaskModel extends Model{
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

    @Column({
        type:DataType.TEXT,
    })
    description!:string;

    @ForeignKey(()=>StatusModel)
    @Column({
        type:DataType.INTEGER,
    })
    status_id!:number;

    @ForeignKey(()=>UserModel)
    @Column({
        type:DataType.INTEGER,
    })
    user_id!:number;
}
