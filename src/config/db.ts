import {Sequelize} from "sequelize-typescript";
import {
    db_host,
    db_port,
    db_name,
    db_password,
    db_username
} from "./loadEnv";

export const sequelize:Sequelize = new Sequelize({
    dialect: "mysql",
    host: db_host!,
    port: parseInt(db_port),
    username: db_username,
    password: db_password,
    database:db_name,
    models: [],
})