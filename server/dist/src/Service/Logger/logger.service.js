"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger._instance)
            Logger._instance = new Logger();
        return Logger._instance;
    }
    static LoggingOn() {
        return (target) => {
            for (const propertyName of Object.getOwnPropertyNames(target.prototype)) {
                const descriptor = Object.getOwnPropertyDescriptor(target.prototype, propertyName);
                if (!descriptor) {
                    continue;
                }
                const originalMethod = descriptor.value;
                const isMethod = originalMethod instanceof Function;
                if (!isMethod) {
                    continue;
                }
                descriptor.value = function (...args) {
                    // console.log(`[${target.name}][${propertyName}] Entering`);
                    console.log(Logger._logger.bgBlue(propertyName));
                    const now = Date.now();
                    const result = originalMethod.apply(this, args);
                    const exitLog = () => {
                        // console.log(`[${target.name}][${propertyName}] Exiting ${Date.now() - now}ms`);
                    };
                    // work around to support async functions.
                    if (typeof result === "object" && typeof result.then === "function") {
                        const promise = result.then(exitLog);
                        // we defer responsibility to the caller of the method to handle the error.
                        // but we need to catch the error otherwise we will get an unhandled error.
                        // notice we return the original result not the promise with the logging call.
                        if (typeof promise.catch === "function") {
                            promise.catch((e) => e);
                        }
                    }
                    else {
                        exitLog();
                    }
                    return result;
                };
                Object.defineProperty(target.prototype, propertyName, descriptor);
            }
        };
    }
    success(msg) {
        console.log(Logger._logger.bgGreen(msg));
    }
    info(msg) {
        console.log(Logger._logger.bgBlue(msg));
    }
    error(msg) {
        console.log(Logger._logger.bgRed(msg));
    }
}
exports.Logger = Logger;
Logger._logger = chalk_1.default;
