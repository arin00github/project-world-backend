import * as express from "express";
import { PlayerCtrl } from "../../controller/playerCtrl";

export class PlayerRoute {
  private router: express.Router = express.Router();
  private playerCtrl = new PlayerCtrl();

  constructor() {
    this.setRoute();
  }

  private setRoute() {
    this.setGet();
    //
  }

  private setGet() {
    this.router.get("/player/:uid", (req, res) => {
      this.playerCtrl.getPlayer(req, res).then();
    });

    this.router.get("/player", (req, res) => {
      this.playerCtrl.getPlayerList(req, res).then();
    });
  }
  getRoute() {
    return this.router;
  }
}
