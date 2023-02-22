import { User } from "./user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Relation
} from "typeorm";

@Entity("tasks")
class Task {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.tasks)
  user: Relation<User>;
}

export { Task };
