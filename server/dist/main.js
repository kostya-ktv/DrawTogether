"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = require("./app");
class Main {
    constructor() {
        this._server = app_1.App.getInstance();
    }
    static getInstance() {
        if (!Main._instance)
            Main._instance = new Main();
        return Main._instance;
    }
    start() {
        this._server.run();
    }
}
(0, dotenv_1.config)({ path: './config.env' });
Main.getInstance().start();
