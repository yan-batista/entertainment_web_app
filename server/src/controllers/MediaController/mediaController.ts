import { NextFunction, Request, Response } from "express";
import MediaService from "../../services/mediaServices";

class MediaController {
  constructor(private mediaService: MediaService) {}

  async getAllMedia(request: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.mediaService.getAllMedia();
      return response.json(res);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getAllMovies(request: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.mediaService.getAllMovies();
      return response.json(res);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getAllSeries(request: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.mediaService.getAllSeries();
      return response.json(res);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getMediaByName(request: Request, response: Response, next: NextFunction) {
    const title: string = request.query.title as string;
    const category: string | undefined = request.query.category as string | undefined;

    try {
      const res = await this.mediaService.getMediaByName(title, category);
      return response.json(res);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default MediaController;
