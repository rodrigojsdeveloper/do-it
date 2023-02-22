import { taskRepository } from "../repositories/task.repository";
import { NotFoundError } from "../errors/notFound.error";
import { ITask } from "../interfaces/task.interface";
import { Task } from "../entities/task.entity";
import { userRepository } from "../repositories/user.repository";

class TasksServices {
  public async create(task: ITask, email: string): Promise<Task> {
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundError("User");
    }

    Reflect.deleteProperty(user, "tasks");

    const newTask = taskRepository.create({ ...task, user });
    await taskRepository.save(newTask);

    return newTask;
  }

  public async specific(task_id: string): Promise<Task> {
    const task = await taskRepository.findOne({
      where: { id: task_id },
      relations: ["user"],
    });

    if (!task) {
      throw new NotFoundError("Task");
    }

    Reflect.deleteProperty(task.user, "tasks");

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
