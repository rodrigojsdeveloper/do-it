import { Router } from "express";

import { TasksControllers } from "../controllers/tasks.controller";

const routes = Router();

const tasksRoutes = () => {
  routes.post("/", new TasksControllers().create);

  return routes;
};

export { tasksRoutes };
