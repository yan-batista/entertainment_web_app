import { UserEntity } from "../entities/userEntity";

interface IUserRepository {
  register(user: UserEntity): Promise<void>;
  getUserByEmail(email: string): Promise<UserEntity[]>;
  // login
}

export default IUserRepository;
