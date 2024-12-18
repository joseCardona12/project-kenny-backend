import {AutoIncrement, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import {UserModel} from "./userModel";
import {ProductModel} from "./productModel";

@Table({
    tableName: "groupps",
    timestamps: false
})
export class GroupModel extends Model{
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

    @ForeignKey(()=>UserModel)
    @Column({
        type:DataType.INTEGER,
    })
    user_id!:number;

    @HasMany(()=>ProductModel)
    products!:ProductModel[];
}