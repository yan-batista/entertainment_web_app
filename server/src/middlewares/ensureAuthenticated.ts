import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

/**
 * This middleware is responsible to check authentication
 * It expects the authToken from headers. This authToken is generated
 * on the login route through jsonwebtokens.
 *
 * @returns
 */
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.cookies.jwtToken;
  if (!authToken) return response.status(401).end();

  // Token string structure is "Bearer token", so it separates them
  //const [, token] = authToken.split(" ");

  try {
    // Gets the token secret from .env
    const secret: string | undefined = process.env.JWTSECRET;
    if (!secret) throw new Error("Could not retrieve token");

    /**
     * Checks if token is valid and gets the subject, defined at the login route
     * when generating the token. Then adds the subject to the request
     *
     * IMPORTANT: it is necessary to extend the Request type from express
     * to include whatever you are trying to add to the request. In this case
     * it's the user email
     */
    const { sub } = verify(authToken, secret) as IPayload;
    request.email = sub;

    // goes to the next function, in this case, the (req, res) from the router
    return next();
  } catch (error) {
    return response.status(401).end();
  }
}
