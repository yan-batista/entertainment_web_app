import { Request, Response } from "express";
import MediaEntity from "../../database/entities/mediaEntity";
import { InsertResponse } from "../../database/repositories/IBookmarkRepository";
import BookmarkServices from "../../services/bookmarkServices";

class BookmarkController {
  constructor(private bookmarkService: BookmarkServices) {}

  async getAllMedia(request: Request, response: Response) {
    let resp: MediaEntity[];
    try {
      resp = await this.bookmarkService.getAllMedia(request.email);
    } catch (error: any) {
      throw new Error(error.message);
    }

    return response.json(resp).status(200);
  }

  async addBookmark(request: Request, response: Response) {
    console.log("add bookmark");
    console.log(request.body);
    const media_id = request.body.media_id;
    let resp: InsertResponse;
    try {
      resp = await this.bookmarkService.addBookmark(request.email, media_id);
    } catch (error: any) {
      throw new Error(error.message);
    }

    return response.status(resp.status).send(resp.statusText);
  }

  async removeBookmark(request: Request, response: Response) {
    const media_id = request.body.media_id;
    try {
      await this.bookmarkService.removeBookmark(request.email, media_id);
    } catch (error: any) {
      throw new Error(error.message);
    }

    return response.status(204).send();
  }
}

export default BookmarkController;
