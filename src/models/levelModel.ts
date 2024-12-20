import {AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import {MedalModel} from "./medalModel";
import {UserModel} from "./userModel";

@Table({
    tableName: "levels",
    timestamps: false
})
export class LevelModel extends Model{
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
        type:DataType.INTEGER
    })
    min_point!:number;

    @Column({
        type:DataType.INTEGER
    })
    max_point!:number;

    @Column({
        type:DataType.STRING,
    })
    url_image!:string;

    @HasMany(()=>UserModel)
    users!:UserModel[];
}