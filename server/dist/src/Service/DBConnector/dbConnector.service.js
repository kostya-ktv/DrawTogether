"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnector = void 0;
const knex_1 = __importDefault(require("knex"));
class DBConnector {
    constructor(connection) {
        this.connector = knex_1.default;
        this.connection = connection;
    }
    connectToDB() {
        return this.connector(this.connection);
    }
}
exports.DBConnector = DBConnector;
