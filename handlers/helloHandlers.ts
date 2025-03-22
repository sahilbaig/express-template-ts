import { Request, Response } from "express";

export const helloWorldHandler = (req: Request, res: Response) => {
  res.send("Hello, World!");
};

export const greetUserHandler = (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
};
