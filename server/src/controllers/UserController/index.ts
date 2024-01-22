import UserRepository from "../../database/repositories/implementations/UserRepository";
import UserService from "../../services/userService";
import UserController from "./userController";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export default userController;
