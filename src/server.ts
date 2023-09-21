import express, { Express, Request, Response } from "express";
import * as winston from "winston";

import { Logger } from "./app/common/utils/logger";
import { Index } from "./app/routes";
import { mysqldb } from "./db/dbClient";

class ProjectServer {
  private logger: winston.Logger | undefined;
  private app: Express;

  constructor() {
    this.app = express();
    //this.logger = Logger.getInstance().getLogger();
  }

  public static startProject(): ProjectServer {
    return new ProjectServer();
  }

  /**
   * 설정 정보 초기화 기능 정의
   */
  private initNodeSrvConfig() {
    this.initLogger();
  }

  /**
   * Logger 초기화 기능 정의
   */
  private initLogger() {
    Logger.getInstance().init();
    this.logger = Logger.getInstance().getLogger();
  }

  /**
   * Routes 초기화 기능 정의
   */
  private initRoutes() {
    Index.getInstance().initRoute(this.app);
  }

  async createServer() {
    this.initNodeSrvConfig();
    this.initRoutes();
    if (this.app) {
      this.app.set("port", 8080);
      this.app.listen(this.app.get("port"), () => {
        if (this.logger) {
          this.logger.info("####################");
          this.logger.info("#### Http Server listening on port");
        }
      });
    }
  }
}

//--watch : 변경을 감지할 파일을 지정할 수 있습니다.
//--exec : 실행할 명령어를 지정할 수 있습니다.

ProjectServer.startProject().createServer().then();
// mysqldb.query("Select * from lck_teams", (err, res, field) => {
//   if (err) throw err;
//   console.log("query success", res);
// });
