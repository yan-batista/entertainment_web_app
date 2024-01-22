import { Request, Response } from "express";
import { UserEntityDTO } from "../../database/entities/userEntity";
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
}

export default UserController;
