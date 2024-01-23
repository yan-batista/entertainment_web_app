import { Request, Response } from "express";
import { UserEntity, UserEntityDTO } from "../../database/entities/userEntity";
import UserService from "../../services/userService";

class UserController {
  constructor(private userService: UserService) {}

  async signup(request: Request, response: Response) {
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
      return response.status(500);
    }
  }

  async login(request: Request, response: Response) {
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
      return response.status(500).send();
    }
  }
}

export default UserController;
