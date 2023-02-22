import { userRepository } from "../repositories/user.repository";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcrypt";

class UsersServices {
  public async create(user: IUser): Promise<User> {
    const hashedPassword = await hash(user.password, 10);
    const newUser = userRepository.create({
      ...user,
      password: hashedPassword,
    });
    await userRepository.save(newUser);

    Reflect.deleteProperty(newUser, "password");

    return newUser;
  }
}

export { UsersServices };
