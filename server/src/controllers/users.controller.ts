import { UsersServices } from "../services/users.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

class UsersControllers {
  public async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await new UsersServices().create(data);

    return res.status(201).json(newUser);
  }
}

export { UsersControllers };
