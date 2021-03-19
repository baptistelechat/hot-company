import * as express from "express";
import { Routes } from "./Routes";
import { sqlDatabase } from "./sql-database";


class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.testConnection(); //
  }

  private config(): void {
    // support application/json type post data
    this.app.use(express.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded({ extended: false }));
  }

  async testConnection() {
    try {
      await sqlDatabase.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

export default new App().app;