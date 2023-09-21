import * as winstone from "winston";
import { Logger } from "../../common/utils/logger";
import { Validate } from "../../common/utils/validate";
import { Express } from "express";
import { PlayerRoute } from "./playerRoute";
import { NotionRoute } from "./notionRoute";

export class IndexV1Index {
  //private logger: winstone.Logger = Logger.getInstance().getLogger();
  private validate: Validate = new Validate();

  init(app: Express, urlTag: string) {
    app.use(`${urlTag}`, new PlayerRoute().getRoute());
  }

  notionInit(app: Express, urlTag: string) {
    app.use(`${urlTag}`, new NotionRoute().getRoute());
  }
}
