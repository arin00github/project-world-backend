import * as express from "express";
import { notionCtrl } from "../../controller/notionCtrl";

export class NotionRoute {
  private router: express.Router = express.Router();
  private notionCtrl = new notionCtrl();
  constructor() {
    this.setRoute();
  }

  private setRoute() {
    this.setGet();
    this.setPost();
    //
  }

  private setGet() {
    this.router.get("/posts", (req, res) => {
      this.notionCtrl.getArchivePostList(req, res).then();
    });
  }

  private setPost() {
    this.router.post("/post", (req, res) => {
      this.notionCtrl.createArchivePost(req, res).then();
    });
  }

  getRoute() {
    return this.router;
  }
}
