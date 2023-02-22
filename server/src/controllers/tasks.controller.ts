import { TasksServices } from "../services/tasks.service";
import { ITask } from "../interfaces/task.interface";
import { Request, Response } from "express";

class TasksControllers {
  public async create(req: Request, res: Response) {
    const data: ITask = req.body;

    const newTask = await new TasksServices().create(data);

    return res.status(201).json(newTask);
  }

  public async delete(req: Request, res: Response) {
    const task_id: string = req.params.id;

    await new TasksServices().delete(task_id);

    return res.status(204).json();
  }
}

export { TasksControllers };
