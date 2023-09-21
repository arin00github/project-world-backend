import * as winston from "winston";
import { Logger } from "../common/utils/logger";
import { Team } from "../models/temaModel";
import { DbClient } from "../../db/dbClient";
import { Util } from "../common/utils/util";

export class TeamDao {
  private logger: winston.Logger = Logger.getInstance().getLogger();

  async getTeam(uid: string, database: string) {
    try {
      new Team().define(database);
      const TEAM = DbClient.getInstance(database).models.Team;
      return await TEAM.findOne({ where: { uid: uid } });
    } catch (e) {
      return Promise.reject(Util.parseSequelizeErrorMsg(e, this.logger));
    }
  }
}
