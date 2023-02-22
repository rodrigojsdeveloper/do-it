export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: string;
  tasks: Array<ITask>;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  created_at: string;
}
