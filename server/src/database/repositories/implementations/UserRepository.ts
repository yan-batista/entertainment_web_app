import getSupabaseConnection from "../../config";
import { UserEntity, UserEntitySelect } from "../../entities/userEntity";
import IUserRepository from "../IUserRepository";

class UserRepository implements IUserRepository {
  private client;
  constructor() {
    this.client = getSupabaseConnection();
  }

  async getUserByEmail(email: string): Promise<UserEntitySelect[]> {
    const { data, error } = await this.client.from("User").select().eq("email", email);
    if (error) throw new Error(error.message);
    return data;
  }

  async register(user: UserEntity): Promise<void> {
    const { error } = await this.client.from("User").insert(user);
    if (error) throw new Error(error.message);
  }
}

export default UserRepository;
