import bcrypt from "bcrypt";
import { UserEntity, UserEntityDTO } from "../database/entities/userEntity";
import IUserRepository from "../database/repositories/IUserRepository";

class UserService {
  constructor(private userRepository: IUserRepository) {}

  async register({ email, password, confirmPassword }: UserEntityDTO) {
    // check if email is already registred
    const userData = await this.userRepository.getUserByEmail(email);
    if (userData.length > 0) {
      throw new Error("Email already registered");
    }

    // check if both password are equal
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // send to database
    const user: UserEntity = {
      email: email,
      password: hashedPassword,
    };

    try {
      await this.userRepository.register(user);
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserService;
