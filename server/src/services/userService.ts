import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { sign } from "jsonwebtoken";
import { UserEntity, UserEntityDTO } from "../database/entities/userEntity";
import IUserRepository from "../database/repositories/IUserRepository";
dotenv.config();

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

  async login({ email, password }: UserEntity) {
    // check if user exists
    const userExists = await this.userRepository.getUserByEmail(email);
    if (userExists.length === 0) throw new Error("Incorrect email or password");

    // if user exists check password
    const passwordsMatch = await bcrypt.compare(password, userExists[0].password);
    if (!passwordsMatch) throw new Error("Incorrect email or password");

    // generate token
    const secret: string | undefined = process.env.JWTSECRET;
    if (!secret) throw new Error("Could not retrieve token");

    /**
     * Creates a JWT, adding the email as payload, using the secret from .env
     * and sending the email as subject and a time limit for this token to be valid
     */
    const token = sign({ email: email }, secret, {
      subject: email,
      expiresIn: "1d",
    });

    return token;
  }
}

export default UserService;
