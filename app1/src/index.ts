import express, { Request, Response } from "express";
import Logger from "../../libs/logger/dist";

const app = express();
const PORT = 3000;

app.get("/", (_: Request, res: Response) => {
  res.status(200).send("Hello world");
});

app.get("/logged", (_: Request, res: Response) => {
  Logger.info("Logged");
  res.status(200).send("Logged");
});

app.listen(PORT, () => {
  console.log(`App1 is running at port ${PORT}`);
});
