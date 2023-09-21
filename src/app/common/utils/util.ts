import * as winston from "winston";
import { Message } from "./message";
import { ErrorDefine } from "../defines/errorDefine";

export class Util {
  static parseSequelizeErrorMsg(err: any, logger: winston.Logger) {
    let errMsg = err.original;
    if (errMsg === undefined) {
      logger.error(err.message);
      return Message.makeErrorMsg(
        ErrorDefine.ErrorCode.InternalServerError,
        ErrorDefine.ErrorMessage.InternalServerError
      );
    }
  }

  static parseErrorMsg(err: any, logger: winston.Logger) {
    //logger.error(err.stack);
    logger.error(err);
    // let errCode = err["code"];
    // if (ErrorDefine.ErrorCode[errCode] === undefined) {
    //   return Message.makeErrorMsg(
    //     ErrorDefine.ErrorCode.InternalServerError,
    //     err.message
    //   );
    // }

    return err;
  }

  static parseJSON(data: any): object {
    try {
      return JSON.parse(data);
    } catch (err) {
      return data;
    }
  }

  static stringifyJSON(data: any): string {
    try {
      return JSON.stringify(data);
    } catch (err) {
      return data;
    }
  }

  static makeRandomString(length: number) {
    const characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }
}
