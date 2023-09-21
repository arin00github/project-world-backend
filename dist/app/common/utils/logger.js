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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = exports.Logger = void 0;
const winston = __importStar(require("winston"));
class Logger {
    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }
    init() {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.timestamp({
                        format: "YYYY-MM-DD HH:mm:ss",
                    }), winston.format.printf((info) => `${info.message}`)),
                }),
            ],
        });
    }
    getLogger() {
        return this.logger;
    }
    setLogLevel(level) {
        let logLevel = LogLevel.debug;
        switch (level) {
            case "error":
                logLevel = LogLevel.error;
                break;
            case "warn":
                logLevel = LogLevel.warn;
                break;
            case "info":
                logLevel = LogLevel.info;
                break;
            case "verbose":
                logLevel = LogLevel.verbose;
                break;
            case "debug":
                logLevel = LogLevel.debug;
                break;
            default:
                logLevel = LogLevel.debug;
                break;
        }
    }
}
exports.Logger = Logger;
Logger.instance = undefined;
var LogLevel;
(function (LogLevel) {
    LogLevel["error"] = "error";
    LogLevel["warn"] = "warn";
    LogLevel["info"] = "info";
    LogLevel["verbose"] = "verbose";
    LogLevel["debug"] = "debug";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
