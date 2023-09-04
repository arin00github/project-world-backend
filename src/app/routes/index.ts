import { Express } from "express";

export class Index {
  private app: Express | undefined = undefined;
  private static instance: Index;

  static getInstance() {
    if (!Index.instance) {
      Index.instance = new Index();
    }
    return Index.instance;
  }

  initRoute(app: Express) {
    this.app = app;
    this.app.use((req, res, next) => {
      // CORS해결 및 모든 header 허용
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      next();
    });
  }
}
