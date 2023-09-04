import * as winston from "winston";

export class Logger {
  private static instance: Logger | undefined = undefined;
  private logger: winston.Logger | undefined;

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
          format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.timestamp({
              format: "YYYY-MM-DD HH:mm:ss",
            }),
            winston.format.printf((info) => `${info.message}`)
          ),
        }),
      ],
    });
  }

  getLogger() {
    return this.logger;
  }

  setLogLevel(level: string) {
    let logLevel: LogLevel = LogLevel.debug;
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

export enum LogLevel {
  error = "error",
  warn = "warn",
  info = "info",
  verbose = "verbose",
  debug = "debug",
}
