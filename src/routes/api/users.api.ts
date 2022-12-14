import { Router } from "express";
import login from "../../crudOperations/auth";
import { create, show, index, update, deleteUser } from "../../crudOperations/userCrud";
import authenticate from "../../handlers/authentication";

const routes = Router();

routes.route("/").get(authenticate, index).post(create);
routes
  .route("/:id")
  .get(authenticate, show)
  .patch(authenticate, update)
  .delete(authenticate, deleteUser);

routes.route("/auth").post(login);
export default routes;
