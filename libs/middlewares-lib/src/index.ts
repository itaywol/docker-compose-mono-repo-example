import { NextFunction, Request, Response } from "express";

const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization === "Bearer simple_auth_123") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

export { authenticationMiddleware };
