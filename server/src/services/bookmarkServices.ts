import { UserEntitySelect } from "../database/entities/userEntity";
import IBookmarkRepository, { InsertResponse } from "../database/repositories/IBookmarkRepository";
import UserRepository from "../database/repositories/implementations/UserRepository";

class BookmarkServices {
  constructor(private bookmarkRepository: IBookmarkRepository) {}

  /**
   * This is the Add Bookmark service, and its reponsible
   * for getting data from the controller (user email and media_id),
   * searching for the user by it's email and sending the data to the repository
   */
  async addBookmark(user_email: string, media_id: number) {
    // creates user repository
    const userRepository = new UserRepository();

    /**
     * tries to get user data through email, and if there is no user found
     * it should throw an error
     */
    let user: UserEntitySelect[];
    try {
      user = await userRepository.getUserByEmail(user_email);
    } catch (error: any) {
      throw new Error(error.message);
    }
    if (user.length <= 0) throw new Error("User not found");

    /**
     * creates a response variable to get the repository response and
     * tries to add the bookmark. Any error will by thrown.
     *
     * returns the data ({status, statusMessage})
     */
    let resp: InsertResponse;
    try {
      resp = await this.bookmarkRepository.addBookmark(user[0].id, media_id);
    } catch (error: any) {
      throw new Error(error.message);
    }

    return resp;
  }
}

export default BookmarkServices;
