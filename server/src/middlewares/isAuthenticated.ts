import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function isAuthenticated(request: Request, response: Response, next: NextFunction) {
  const auth = request.headers.authorization;
  if (!auth) {
    request.email = "";
    request.isAuthenticated = false;

    return next();
  }

  const [, token] = auth.split(" ");

  try {
    const secret: string | undefined = process.env.JWTSECRET;
    if (!secret) throw new Error("Could not retrieve token");

    const { sub } = verify(token, secret) as IPayload;
    request.email = sub;
    request.isAuthenticated = true;

    return next();
  } catch (error) {
    return response.status(401).end();
  }
}
