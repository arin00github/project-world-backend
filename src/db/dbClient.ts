import mysql from "mysql2";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

export const mysqldb = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: 3306,
});

export const sequelize = new Sequelize({
  database: DB_DATABASE,
  username: DB_USER,
  password: DB_PASSWORD,
  port: 3306,
  host: DB_HOST,
  dialect: "mysql",
});

mysqldb.connect((err) => {
  if (err) console.log(`connection error ${err}`);
});

export class DbClient {
  private static instance: Map<string, Sequelize> = new Map();

  static getInstance(database: string): Sequelize {
    if (
      this.instance === undefined ||
      this.instance.get(database) === undefined
    ) {
      this.instance.set(
        database,
        new Sequelize({
          database: DB_DATABASE,
          username: DB_USER,
          password: DB_PASSWORD,
          port: 3306,
          host: DB_HOST,
          dialect: "mysql",
        })
      );
    }
    return this.instance.get(database) as Sequelize;
  }
}
