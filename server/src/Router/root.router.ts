import { Router } from "express"
import { UserController } from "../Controller/UserController/user.controller"
import { Routes } from "./routes"

export class RootRouter {
    private readonly _router: Router = Router()
    private readonly _user_controller = new UserController()
    constructor() {}

    private _initialRoutes() {
        this._router.get(Routes.ROUTE_LOGIN, this._user_controller.login.bind(this._user_controller))
        this._router.get(Routes.ROUTE_LOGOUT, this._user_controller.logout.bind(this._user_controller))
    }

    public getRouter() {
        this._initialRoutes()
        return this._router
    }
}