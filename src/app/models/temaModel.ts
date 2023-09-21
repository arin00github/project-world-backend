import { DbClient } from "../../db/dbClient";

export interface ITeam {
  uid: string;
  team_name: string;
  last_rank: number;
  world_cnt: number;
}

export class Team {
  define(database: string) {
    DbClient.getInstance(database).define("Team", {
      uid: {
        allowNull: false,
        primaryKey: true,
        type: "string",
      },
      team_name: {
        allowNull: false,
        type: "string",
      },
      last_rank: {
        allowNull: true,
        type: "number",
      },
      world_cnt: {
        allowNull: true,
        type: "number",
      },
    });
  }
}
