import {AutoIncrement, Column, DataType, HasOne, Model, PrimaryKey, Table} from "sequelize-typescript";
import {ProductModel} from "./productModel";

@Table({
    tableName: "units",
    timestamps: false
})
export class UnitModel extends Model{
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

    @HasOne(()=>ProductModel)
    product!:ProductModel;
}