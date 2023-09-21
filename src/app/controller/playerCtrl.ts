import express, {
  Express,
  Application,
  Request,
  Response,
  NextFunction,
} from "express";
import { PlayerDao } from "../dao/playerDao";
import { Logger } from "../common/utils/logger";
import winston from "winston";
import { ErrorDefine } from "../common/defines/errorDefine";
import { Message } from "../common/utils/message";
import { Util } from "../common/utils/util";

export class PlayerCtrl {
  private playerDao: PlayerDao = new PlayerDao();
  private logger: winston.Logger = Logger.getInstance().getLogger();

  async getPlayer(req: Request, res: Response) {
    let resStatusCode = undefined;
    let resMsg = undefined;
    //const ACTION_NAME = "플레이어 상세 조회";

    try {
      const uidByReq = req.params.uid;
      const dbname = req.headers["x-auth-realm"]?.toString() || "lck";
      const PLAYERS = await this.playerDao.getPlayer(uidByReq, dbname);

      if (!PLAYERS) {
        this.logger.error(ErrorDefine.ErrorMessage.UserIsNotExists);
        throw Message.makeErrorMsg(
          ErrorDefine.ErrorCode.InternalServerError,
          ErrorDefine.ErrorMessage.InternalServerError
        );
      }

      resStatusCode = ErrorDefine.ErrorCode.Success;
      resMsg = Message.makeSuccessMsg(
        ErrorDefine.ErrorMessage.Success,
        PLAYERS
      );
    } catch (e) {
      resStatusCode = ErrorDefine.ErrorCode.InternalServerError;
      resMsg = Util.parseErrorMsg(e, this.logger);
    }
    res.statusCode = resStatusCode;
    res.send(resMsg);
  }

  async getPlayerList(req: Request, res: Response) {
    let resStatusCode = undefined;
    let resMsg = undefined;
    try {
      const dbname = req.headers["x-auth-realm"]?.toString() || "lck";
      const PLAYERS_LIST = await this.playerDao.getPlayerList(dbname);
      console.log("PLAYERS_LIST", PLAYERS_LIST);

      resStatusCode = ErrorDefine.ErrorCode.Success;
      // resMsg = Message.makeListMsg(
      //   ErrorDefine.ErrorMessage.Success,
      //   PLAYERS_LIST["count"] as number,
      //   PLAYERS_LIST["rows"]
      // );
    } catch (e) {
      resStatusCode = ErrorDefine.ErrorCode.InternalServerError;
      resMsg = Util.parseErrorMsg(e, this.logger);
    }
    res.statusCode = resStatusCode;
    res.send(resMsg);
  }
}
