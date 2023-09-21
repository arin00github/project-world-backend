import * as winston from "winston";
import { Logger } from "../common/utils/logger";
import { Player } from "../models/playerModel";
import { DbClient } from "../../db/dbClient";
import { Util } from "../common/utils/util";

export class PlayerDao {
  private logger: winston.Logger = Logger.getInstance().getLogger();

  async getPlayer(uid: string, database: string) {
    try {
      new Player().define(database);
      const PLAYER = DbClient.getInstance(database).models.lck_players;
      return await PLAYER.findOne({ where: { uid: uid } });
    } catch (e) {
      return Promise.reject(Util.parseSequelizeErrorMsg(e, this.logger));
    }
  }

  async getPlayerList(database: string) {
    try {
      new Player().define(database);
      const PLAYER = DbClient.getInstance(database).models.lck_players;
      return await PLAYER.findAll();
    } catch (e) {
      return Promise.reject(Util.parseSequelizeErrorMsg(e, this.logger));
    }
  }

  async createPlayer(input: any, database: string) {
    const transaction = await DbClient.getInstance(database).transaction();

    try {
      new Player().define(database);
      const PLAYER = DbClient.getInstance(database).models.lck_players;
      await PLAYER.create(input, { transaction: transaction });
      transaction.commit();
      return;
    } catch (e) {
      transaction.rollback();
      return Promise.reject(Util.parseSequelizeErrorMsg(e, this.logger));
    }
  }

  async updatePlayer(input: any, database: string) {
    const transaction = await DbClient.getInstance(database).transaction();
    try {
      new Player().define(database);
      const PLAYER = DbClient.getInstance(database).models.lck_players;

      await PLAYER.update(input, {
        where: { uid: input.uid },
        transaction: transaction,
      });
      transaction.commit();
    } catch (e) {
      transaction.rollback();
      return Promise.reject(Util.parseSequelizeErrorMsg(e, this.logger));
    }
  }
}
