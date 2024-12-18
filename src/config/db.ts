import {Sequelize} from "sequelize-typescript";

export const sequelize:Sequelize = new Sequelize({
    dialect: "mysql",

})