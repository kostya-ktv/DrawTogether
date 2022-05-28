"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketServer = void 0;
const express_ws_1 = __importDefault(require("express-ws"));
const app_1 = require("./app");
const express_1 = require("express");
class WebSocketServer {
    constructor() {
        this._WSServer = (0, express_ws_1.default)(app_1.App.getInstance()._app).app;
        WebSocketServer.wsRouter.ws('/', (ws, req) => {
            ws.on('message', (msg) => {
                ws.send(msg);
            });
        });
    }
}
exports.WebSocketServer = WebSocketServer;
WebSocketServer.wsRouter = (0, express_1.Router)();
