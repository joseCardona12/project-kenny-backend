import express, {Express} from "express";
import {UtilApplication} from "./utils/utilApplication";
import {router} from "./routes";
import {port} from "./config/loadEnv";

const app:Express = express();
app.use(express.json()); // Middleware for available the send information format json.
app.use("/api", router); // Middleware routes

UtilApplication.startServer(app,port);