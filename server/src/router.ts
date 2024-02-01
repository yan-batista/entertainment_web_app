import { NextFunction, Request, Response, Router } from "express";
import bookmarkController from "./controllers/BookmarkController";
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
  return userController.signup(request, response, next);
});

// login
router.post("/api/login", async (request: Request, response: Response, next: NextFunction) => {
  return userController.login(request, response, next);
});

// logout
router.get("/api/logout", async (request: Request, response: Response, next: NextFunction) => {
  return userController.logout(request, response);
});

// checks if user is authenticated
router.get("/api/auth", ensureAuthenticated, async (req: Request, res: Response) => {
  //console.log("reached");
  //console.log(req.email);
  return res.status(200).send("success");
});

// Bookmark
router.get("/api/bookmarked", ensureAuthenticated, async (request: Request, response: Response) => {
  return bookmarkController.getAllMedia(request, response);
});

// add bookmark
router.post("/api/bookmark/add", ensureAuthenticated, async (request: Request, response: Response) => {
  return bookmarkController.addBookmark(request, response);
});

export default router;
