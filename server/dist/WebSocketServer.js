"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wsRouter = (0, express_1.Router)();
wsRouter.ws('/', (ws, req) => {
    console.log('connected');
    ws.send('Connected');
    ws.on('message', (msg) => {
        ws.send(msg);
    });
});
exports.default = wsRouter;
