import { Request, Response } from "express";
import { InsertResponse } from "../../database/repositories/IBookmarkRepository";
import BookmarkServices from "../../services/bookmarkServices";

class BookmarkController {
  constructor(private bookmarkService: BookmarkServices) {}

  async addBookmark(request: Request, response: Response) {
    const media_id = request.body.media_id;
    let resp: InsertResponse;
    try {
      resp = await this.bookmarkService.addBookmark(request.email, media_id);
    } catch (error: any) {
      throw new Error(error.message);
    }

    return response.status(resp.status).send(resp.statusText);
  }
}

export default BookmarkController;
