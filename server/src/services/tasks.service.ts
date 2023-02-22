import { taskRepository } from "../repositories/task.repository";
import { ITask } from "../interfaces/task.interface";
import { Task } from "../entities/task.entity";
import { NotFoundError } from "../errors/notFound.error";

class TasksServices {
  public async create(task: ITask): Promise<Task> {
    const newTask = taskRepository.create({ ...task });
    await taskRepository.save(newTask);

    return newTask;
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
