import { Express } from "express";

import { loginRoutes } from "./login.routes";
import { tasksRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/tasks", tasksRoutes());
  app.use("/signin", loginRoutes());
};

export { appRoutes };
