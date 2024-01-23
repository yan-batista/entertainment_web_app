import bcrypt from "bcrypt";
import { Request, Response, Router } from "express";
import mediaController from "./controllers/MediaController";
import userController from "./controllers/UserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

// routes
// root -- get all movies and series
router.get("/api/", async (request: Request, response: Response) => {
  return mediaController.getAllMedia(request, response);
});

// get all movies
router.get("/api/movies", async (request: Request, response: Response) => {
  return mediaController.getAllMovies(request, response);
});

// get all series
router.get("/api/series", async (request: Request, response: Response) => {
  return mediaController.getAllSeries(request, response);
});

// get media by name
router.get("/api/search", async (request: Request, response: Response) => {
  return mediaController.getMediaByName(request, response);
});

// Users
// sign up
router.post("/signup", async (request: Request, response: Response) => {
  return userController.signup(request, response);
});

// login
router.post("/login", async (request: Request, response: Response) => {
  return userController.login(request, response);
});

router.get("/test", ensureAuthenticated, async (req: Request, res: Response) => {
  console.log("reached");
  console.log(req.email);
  return res.status(200).send("success");
});

export default router;
