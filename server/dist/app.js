"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importStar(require("express"));
const global_constants_1 = require("./global.constants");
const root_router_1 = require("./src/Router/root.router");
const logger_service_1 = require("./src/Service/Logger/logger.service");
const express_ws_1 = __importDefault(require("express-ws"));
class App {
    constructor() {
        this._application = (0, express_1.default)();
        this._root_router = new root_router_1.RootRouter().getRouter();
        this._port = process.env.SERVER_PORT;
        this._log = logger_service_1.Logger.getInstance();
    }
    static getInstance() {
        if (!App._instance)
            App._instance = new App();
        return App._instance;
    }
    run() {
        this._runWSServer();
        this._toUse();
        this._application.listen(this._port, () => this._log.success(`server running on port: ${this._port}`));
    }
    _toUse() {
        this._application.use((0, cors_1.default)());
        this._application.use((0, express_1.urlencoded)());
        this._application.use(global_constants_1.URL_API, this._root_router);
    }
    _runWSServer() {
        const { app, applyTo, getWss } = (0, express_ws_1.default)(this._application);
        app.ws('/ws', (webSocket, req) => {
            const WSS = getWss();
            console.log('connected');
            //sending msg to client
            webSocket.send('Successfully connection');
            webSocket.on('message', (msg) => {
                const message = JSON.parse(msg);
                switch (message.method) {
                    case 'connection':
                        connectionHandler(webSocket, message, WSS);
                        break;
                    case 'draw':
                        broadcastConnection(WSS, message);
                        break;
                }
            });
        });
    }
}
exports.App = App;
const connectionHandler = (socket, message, WSS) => {
    socket.id = message.id;
    broadcastConnection(WSS, message);
};
const broadcastConnection = (wss, msg) => {
    wss.clients.forEach((client) => {
        if (client.id === msg.id) {
            client.send(JSON.stringify(msg));
        }
    });
};
