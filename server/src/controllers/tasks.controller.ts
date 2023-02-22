import { TasksServices } from "../services/tasks.service";
import { ITask } from "../interfaces/task.interface";
import { Request, Response } from "express";

class TasksControllers {
  public async create(req: Request, res: Response) {
    const data: ITask = req.body;

    const newTask = await new TasksServices().create(data);

    return res.status(201).json(newTask);
  }
}

export { TasksControllers };
