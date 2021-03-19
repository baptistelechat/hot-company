import { UserController } from "../Controllers";
import { BreadController } from "../Controllers";


export class Routes {
public userController: UserController = new UserController();
public breadController: BreadController = new BreadController();

  public routes(app): void {
    app
      .route("/Users")
      .get(this.userController.getAll)
      .post(this.userController.create);
    app.route("/Users/:id")
      .get(this.userController.get)
      .post(this.userController.update)
      .delete(this.userController.delete);
    app
      .route("/Breads")
      .get(this.breadController.getAll)
      .post(this.breadController.create);
    app.route("/Breads/:id")
      .get(this.breadController.get)
      .post(this.breadController.update)
      .delete(this.breadController.delete);

  }
}