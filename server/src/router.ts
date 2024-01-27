import { NextFunction, Request, Response, Router } from "express";
import mediaController from "./controllers/MediaController";
import userController from "./controllers/UserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

// routes
// root -- get all movies and series
router.get("/api/", async (request: Request, response: Response, next: NextFunction) => {
  return mediaController.getAllMedia(request, response, next);
});

// get all movies
router.get("/api/movies", async (request: Request, response: Response, next: NextFunction) => {
  return mediaController.getAllMovies(request, response, next);
});

// get all series
router.get("/api/series", async (request: Request, response: Response, next: NextFunction) => {
  return mediaController.getAllSeries(request, response, next);
});

// get media by name
router.get("/api/search", async (request: Request, response: Response, next: NextFunction) => {
  return mediaController.getMediaByName(request, response, next);
});

// Users
// sign up
router.post("/api/signup", async (request: Request, response: Response, next: NextFunction) => {
  const token = userController.signup(request, response, next);
  return userController.signup(request, response, next);
});

// login
router.post("/api/login", async (request: Request, response: Response, next: NextFunction) => {
  return userController.login(request, response, next);
});

router.get("/api/auth", ensureAuthenticated, async (req: Request, res: Response) => {
  console.log("reached");
  console.log(req.email);
  return res.status(200).send("success");
});

export default router;
