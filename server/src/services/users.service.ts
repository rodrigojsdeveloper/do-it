import { userRepository } from "../repositories/user.repository";
import { NotFoundError } from "../errors/notFound.error";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcrypt";

class UsersServices {
  public async create(user: IUser): Promise<User> {
    const hashedPassword = await hash(user.password, 10);
    const newUser = userRepository.create({
      ...user,
      password: hashedPassword,
      tasks: [],
    });
    await userRepository.save(newUser);

    Reflect.deleteProperty(newUser, "password");

    return newUser;
  }

  public async profile(email: string): Promise<User> {
    const user = await userRepository.findOne({
      where: { email },
      relations: ["tasks"],
    });

    if (!user) {
      throw new NotFoundError("User");
    }

    Reflect.deleteProperty(user, "password");

    return user;
  }
}

export { UsersServices };
