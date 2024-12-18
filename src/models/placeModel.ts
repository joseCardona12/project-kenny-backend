import {AutoIncrement, Column, DataType, HasOne, Model, PrimaryKey, Table} from "sequelize-typescript";
import {ProductModel} from "./productModel";

@Table({
    tableName: "places",
    timestamps: false
})
export class PlaceModel extends Model{
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