import * as winston from "winston";
import cors from "cors";
import { Express } from "express";
import { IndexV1Index } from "./v1";
import bodyParser from "body-parser";
import { Logger } from "../common/utils/logger";

export class Index {
  private logger: winston.Logger = Logger.getInstance().getLogger();
  private app: Express | undefined = undefined;
  private static instance: Index;
  private v1Index: IndexV1Index = new IndexV1Index();

  static getInstance() {
    if (!Index.instance) {
      Index.instance = new Index();
    }
    return Index.instance;
  }

  initRoute(app: Express) {
    this.app = app;

    // qs 라이브러리를 사용한 파싱
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // json 파싱 용량 제한 50mb
    this.app.use(bodyParser.text({ type: "application/json", limit: "50mb" }));

    this.app.use(cors({ credentials: true, origin: true }));

    // this.app.use((req, res, next) => {
    //   this.logger.info(`(${req.method}) ${req.originalUrl}`);
    //   // CORS해결 및 모든 header 허용
    //   res.setHeader("Access-Control-Allow-Origin", "*");
    //   res.setHeader("Access-Control-Allow-Headers", "*");
    //   res.setHeader("Access-Control-Allow-Methods", "*");
    //   next();
    // });

    this.v1Index.init(this.app, "/esports");
    this.v1Index.notionInit(this.app, "/notion");
  }
}
