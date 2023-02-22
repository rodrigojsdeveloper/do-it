import { Router } from "express";

import { UsersControllers } from "../controllers/users.controller";
import { tokenMiddleware } from "../middlewares/token.middleware";

const routes = Router();

const usersRoutes = () => {
  routes.post("/signup", new UsersControllers().create);

  routes.get("/profile", tokenMiddleware, new UsersControllers().profile);

  return routes;
};

export { usersRoutes };
