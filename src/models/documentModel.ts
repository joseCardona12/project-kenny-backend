import {AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {RoleModel} from "./roleModel";
import {LevelModel} from "./levelModel";
import {UserModel} from "./userModel";

@Table({
    tableName: "documents",
    timestamps: false
})
export class DocumentModel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!:number;

    @Column({
        type:DataType.STRING(200),
    })
    name!:string;

    @Column({
        type:DataType.TEXT,
    })
    description!:string;

    @Column({
        type:DataType.STRING(100),
    })
    date!:string;

    @Column({
        type:DataType.DOUBLE,
    })
    valor_initial!:number;

    @Column({
        type:DataType.DOUBLE,
    })
    valor_returned!:number;

    @Column({
        type:DataType.INTEGER,
    })
    total_products!:number;

    @Column({
        type:DataType.DOUBLE,
    })
    price_total_products!:number;

    @ForeignKey(()=>UserModel)
    @Column({
        type:DataType.INTEGER,
    })
    user_id!:number;
}