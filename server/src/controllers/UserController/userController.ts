import { NextFunction, Request, Response } from "express";
import { UserEntity, UserEntityDTO } from "../../database/entities/userEntity";
import UserService from "../../services/userService";

class UserController {
  constructor(private userService: UserService) {}

  async signup(request: Request, response: Response, next: NextFunction) {
    const { email, password, confirmPassword } = request.body;

    const userData: UserEntityDTO = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      await this.userService.register(userData);
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async login(request: Request, response: Response, next: NextFunction) {
    const { email, password } = request.body;

    const user: UserEntity = {
      email: email,
      password: password,
    };

    try {
      const token = await this.userService.login(user);
      return response.json(token);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default UserController;
