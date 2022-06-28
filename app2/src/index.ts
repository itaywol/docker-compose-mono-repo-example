import express, { Request, Response } from "express";
import { authenticationMiddleware } from "../../libs/middlewares-lib/dist";

const app = express();
const PORT = 3001;

app.get("/", (_: Request, res: Response) => {
  res.status(200).send("Hello world");
  app.get(
    "/authenticated",
    authenticationMiddleware,
    (_: Request, res: Response) => {
      res.status(200).send("Authenticated Hello world");
    }
  );
});

app.listen(PORT, () => {
  console.log(`App2 is running at port ${PORT}`);
});
