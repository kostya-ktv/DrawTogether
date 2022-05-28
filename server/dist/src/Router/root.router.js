"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../Controller/UserController/user.controller");
const routes_1 = require("./routes");
class RootRouter {
    constructor() {
        this._router = (0, express_1.Router)();
        this._user_controller = new user_controller_1.UserController();
    }
    _initialRoutes() {
        this._router.get(routes_1.Routes.ROUTE_LOGIN, this._user_controller.login.bind(this._user_controller));
        this._router.get(routes_1.Routes.ROUTE_LOGOUT, this._user_controller.logout.bind(this._user_controller));
    }
    getRouter() {
        this._initialRoutes();
        return this._router;
    }
}
exports.RootRouter = RootRouter;
