"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    constructor() { }
    ok(response, data) {
        return this.send(response, 200, data);
    }
    send(response, code, data) {
        return data ? response.status(code).json(data) : response.status(code).json({ ok: code });
    }
}
exports.BaseController = BaseController;
