import { Express } from "express";

import { usersRoutes } from "./users.routes";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
};

export { appRoutes };
