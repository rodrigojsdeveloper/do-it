import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entity";
import { Repository } from "typeorm";

const taskRepository: Repository<Task> = AppDataSource.getRepository(Task);

export { taskRepository };
