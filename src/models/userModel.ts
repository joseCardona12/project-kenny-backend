import {AutoIncrement, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import {RoleModel} from "./roleModel";
import {LevelModel} from "./levelModel";
import {GroupModel} from "./groupModel";
import {DocumentModel} from "./documentModel";
import {TaskModel} from "./taskModel";
import {MedalModel} from "./medalModel";

@Table({
    tableName: "users",
    timestamps: false
})
export class UserModel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!:number;

    @Column({
        type:DataType.STRING(150),
    })
    name!:string;

    @Column({
        type:DataType.STRING(100),
    })
    password!:string;

    @Column({
        type:DataType.STRING(100),
    })
    phone_number!:string;

    @Column({
        type:DataType.STRING(100),
    })
    gmail!:string;

    @Column({
        type:DataType.STRING,
    })
    url_image!:string;

    @ForeignKey(()=>RoleModel)
    @Column({
        type:DataType.INTEGER,
    })
    role_id!:number;

    @ForeignKey(()=>LevelModel)
    @Column({
        type:DataType.INTEGER,
    })
    level_id!:number;

    @HasMany(()=>GroupModel)
    groups!:GroupModel[];

    @HasMany(()=>DocumentModel)
    documents!:DocumentModel[];

    @HasMany(()=>TaskModel)
    tasks!:TaskModel[];

    @HasMany(()=>MedalModel)
    medals!:MedalModel[];
}