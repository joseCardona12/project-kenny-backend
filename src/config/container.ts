import "reflect-metadata";
import {container} from "tsyringe";
import {AuthRepository} from "@repositories/authRepository";
import {AuthService} from "@services/authService";

container.registerSingleton<AuthRepository>(AuthRepository);
container.registerSingleton<AuthService>(AuthService);