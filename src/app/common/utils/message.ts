import { ErrorDefine } from "../defines/errorDefine";

export class Message {
  static makeSuccessMsg(message: string, results?: any) {
    return {
      code: ErrorDefine.ErrorCode.Success,
      message: message,
      responseTime: new Date().toISOString(),
      response: results,
    };
  }

  static makeListMsg(message: string, count: number, results: any) {
    return {
      code: ErrorDefine.ErrorCode.Success,
      message: message,
      responseTime: new Date().toISOString(),
      response: {
        results: results,
        count: count,
      },
    };
  }

  static makeErrorMsg(code: number, message: string, results?: any) {
    return {
      code: code,
      message: message,
      responseTime: new Date().toISOString(),
      response: results,
    };
  }
}

export interface MessageFormat {
  code: number;
  message: string;
  responseTime: string;
  response?:
    | {
        count?: number;
        results?: any;
      }
    | any;
}
