import { DbClient } from "../../db/dbClient";

export interface IPlayer {
  uid: string;
  plyaer_id: string;
  position: string;
  player_name?: string;
  age?: number;
  win_rate?: number;
  current_team?: string;
}

export class Player {
  define(database: string) {
    DbClient.getInstance(database).define(
      "lck_players",
      {
        uid: {
          allowNull: false,
          primaryKey: true,
          type: "string",
        },
        player_id: {
          allowNull: false,
          unique: true,
          type: "string",
        },
        position: {
          allowNull: false,
          type: "string",
        },
        player_name: {
          allowNull: true,
          type: "string",
        },
        age: {
          allowNull: true,
          type: "number",
        },
        win_rate: {
          allowNull: true,
          type: "number",
        },
        current_team: {
          allowNull: true,
          type: "string",
        },
      },
      { createdAt: false, updatedAt: false }
    );
  }
}
