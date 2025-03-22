import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

router.get("/greet/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

export default router;
