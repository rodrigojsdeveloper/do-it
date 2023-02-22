import { Router } from "express";

import { UsersControllers } from "../controllers/users.controller";

const routes = Router();

const usersRoutes = () => {
  routes.post("/signup", new UsersControllers().create);

  return routes;
};

export { usersRoutes };
