import { TasksServices } from "../services/tasks.service";
import { ITask } from "../interfaces/task.interface";
import { Request, Response } from "express";

class TasksControllers {
  public async create(req: Request, res: Response) {
    const email: string = req.email

    const data: ITask = req.body;

    const newTask = await new TasksServices().create(data, email);

    return res.status(201).json(newTask);
  }

  public async specific(req: Request, res: Response) {
    const task_id: string = req.params.id;

    const specificTask = await new TasksServices().specific(task_id);

    return res.json(specificTask);
  }

  public async delete(req: Request, res: Response) {
    const task_id: string = req.params.id;

    await new TasksServices().delete(task_id);

    return res.status(204).json();
  }
}

export { TasksControllers };
