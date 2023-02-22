import { Router } from "express";

import { TasksControllers } from "../controllers/tasks.controller";
import { tokenMiddleware } from "../middlewares/token.middleware";

const routes = Router();

const tasksRoutes = () => {
  routes.post("/", tokenMiddleware, new TasksControllers().create);

  routes.delete("/:id", tokenMiddleware, new TasksControllers().delete);

  return routes;
};

export { tasksRoutes };
