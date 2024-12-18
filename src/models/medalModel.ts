import {AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {UserModel} from "./userModel";

@Table({
    tableName: "medals",
    timestamps: false
})
export class MedalModel extends Model{
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
        type:DataType.STRING,
    })
    url_image!:string;

    @ForeignKey(()=>UserModel)
    @Column({
        type:DataType.INTEGER,
    })
    user_id!:number;
}