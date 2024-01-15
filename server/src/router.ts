import { Request, Response, Router } from "express";
import getSupabaseConnection from "./database/config";

const router = Router();

// routes
// root
router.get("/", async (request: Request, response: Response) => {
  // get test
  const { data, error } = await getSupabaseConnection().from("Media").select();
  response.send(data);
});

export default router;
