import { taskRepository } from "../repositories/task.repository";
import { ITask } from "../interfaces/task.interface";
import { Task } from "../entities/task.entity";

class TasksServices {
  public async create(task: ITask): Promise<Task> {
    const newTask = taskRepository.create({ ...task });
    await taskRepository.save(newTask);

    return newTask;
  }
}

export { TasksServices };
