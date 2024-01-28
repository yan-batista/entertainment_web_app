import IBookmarkRepository from "../../database/repositories/IBookmarkRepository";
import BookMarkRepository from "../../database/repositories/implementations/BookmarkRepository";
import BookmarkServices from "../../services/bookmarkServices";
import BookmarkController from "./bookmarkController";

const bookmarkRepository: IBookmarkRepository = new BookMarkRepository();
const bookmarkService: BookmarkServices = new BookmarkServices(bookmarkRepository);
const bookmarkController: BookmarkController = new BookmarkController(bookmarkService);

export default bookmarkController;
