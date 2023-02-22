import { taskRepository } from "../repositories/task.repository";
import { NotFoundError } from "../errors/notFound.error";
import { ITask } from "../interfaces/task.interface";
import { Task } from "../entities/task.entity";

class TasksServices {
  public async create(task: ITask): Promise<Task> {
    const newTask = taskRepository.create({ ...task });
    await taskRepository.save(newTask);

    return newTask;
  }

  public async specific(task_id: string): Promise<Task> {
    const task = await taskRepository.findOneBy({ id: task_id });

    if (!task) {
      throw new NotFoundError("Task");
    }

    return task;
  }

  public async delete(task_id: string): Promise<void> {
    const task = await taskRepository.findOneBy({ id: task_id });

    if (!task) {
      throw new NotFoundError("Task");
    }

    taskRepository.delete(task.id);
  }
}

export { TasksServices };
