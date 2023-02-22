import { Express } from "express";
import { tasksRoutes } from "./tasks.routes";

import { usersRoutes } from "./users.routes";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/tasks", tasksRoutes());
};

export { appRoutes };
