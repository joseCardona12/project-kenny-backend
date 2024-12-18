import {AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {PlaceModel} from "./placeModel";
import {UnitModel} from "./unitModel";
import {DocumentModel} from "./documentModel";
import {GroupModel} from "./groupModel";

@Table({
    tableName: "products",
    timestamps: false
})
export class ProductModel extends Model{
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
        type:DataType.INTEGER,
    })
    quantity!:number;

    @Column({
        type:DataType.STRING,
    })
    url_image!:string;

    @ForeignKey(()=>PlaceModel)
    @Column({
        type:DataType.INTEGER,
    })
    place_id!:number;

    @ForeignKey(()=>UnitModel)
    @Column({
        type:DataType.INTEGER,
    })
    unit_id!:number;

    @ForeignKey(()=>DocumentModel)
    @Column({
        type:DataType.INTEGER,
    })
    document_id!:number;

    @ForeignKey(()=>GroupModel)
    @Column({
        type:DataType.INTEGER,
    })
    group_id!:number;
}