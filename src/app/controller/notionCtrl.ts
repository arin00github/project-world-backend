import * as winston from "winston";
import dotenv from "dotenv";
import { Logger } from "../common/utils/logger";
import { Request, Response } from "express";
import {
  Client,
  isNotionClientError,
  ClientErrorCode,
  APIErrorCode,
} from "@notionhq/client";
import { ErrorDefine } from "../common/defines/errorDefine";
import { Message } from "../common/utils/message";
import { Util } from "../common/utils/util";

dotenv.config();
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const database_id = process.env.NOTION_DATABASE_ID;

export class notionCtrl {
  private logger: winston.Logger = Logger.getInstance().getLogger();

  async getArchivePostList(req: Request, res: Response) {
    let resStatusCode = undefined;
    let resMsg = undefined;

    if (!database_id) {
      resStatusCode = ErrorDefine.ErrorCode.BadRequest;
      throw Message.makeErrorMsg(
        ErrorDefine.ErrorCode.BadRequest,
        ErrorDefine.ErrorMessage.BadRequest
      );
    }

    try {
      const resObject = await notion.databases.query({
        database_id: database_id,
      });
      if (!resObject) {
        this.logger.error(ErrorDefine.ErrorMessage.UserIsNotExists);
        throw Message.makeErrorMsg(
          ErrorDefine.ErrorCode.InternalServerError,
          ErrorDefine.ErrorMessage.InternalServerError
        );
      }
      resStatusCode = ErrorDefine.ErrorCode.Success;
      resMsg = Message.makeSuccessMsg(
        ErrorDefine.ErrorMessage.Success,
        resObject.results
      );
    } catch (e) {
      this.logger.error(e);
      resStatusCode = ErrorDefine.ErrorCode.InternalServerError;
      resMsg = Util.parseErrorMsg(e, this.logger);
    }
    res.status(resStatusCode);
    res.send(resMsg);
  }

  async createArchivePost(req: Request, res: Response) {
    let resStatusCode = undefined;
    let resMsg = undefined;
    const reqBody = Util.parseJSON(req.body) as any;

    if (!reqBody) {
      resStatusCode = ErrorDefine.ErrorCode.BadRequest;
      throw Message.makeErrorMsg(
        ErrorDefine.ErrorCode.BadRequest,
        ErrorDefine.ErrorMessage.BadRequest
      );
    }
    try {
      const resObject = await notion.pages.create(reqBody);
      resStatusCode = ErrorDefine.ErrorCode.Success;
      resMsg = Message.makeSuccessMsg(
        ErrorDefine.ErrorMessage.Success,
        resObject
      );
    } catch (e) {
      if (isNotionClientError(e)) {
        switch (e.code) {
          case ClientErrorCode.RequestTimeout:
            resStatusCode = ErrorDefine.ErrorCode.RequestTimeout;

            break;
          case APIErrorCode.Unauthorized:
            resStatusCode = ErrorDefine.ErrorCode.Unauthorized;
            break;
          case APIErrorCode.InvalidJSON:
            resStatusCode = ErrorDefine.ErrorCode.InvalidValue;
            break;
          case APIErrorCode.InvalidRequest:
            resStatusCode = ErrorDefine.ErrorCode.InvalidRequestFormat;
            break;
          default:
            resStatusCode = ErrorDefine.ErrorCode.InternalServerError;
        }
      } else {
        resStatusCode = ErrorDefine.ErrorCode.InternalServerError;
      }
      resMsg = Util.parseErrorMsg(e, this.logger);
    }
    res.status(resStatusCode);
    res.send(resMsg);
  }
}
