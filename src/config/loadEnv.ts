process.loadEnvFile();

export const {
    PORT:port = "3002",
    DB_NAME: db_name = "project-kenny",
    DB_HOST: db_host = "localhost",
    DB_PORT:db_port = "3200",
    DB_USER: db_username = "root",
    DB_PASSWORD: db_password = "root",
    SECRET= "secret",
} = process.env;
