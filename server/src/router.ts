import { Request, Response, Router } from "express";
import mediaController from "./controllers/MediaController";

const router = Router();

// routes
// root -- get all movies and series
router.get("/", async (request: Request, response: Response) => {
  return mediaController.getAllMedia(request, response);
});

export default router;
