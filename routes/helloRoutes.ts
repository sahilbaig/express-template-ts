import { Router, Request, Response } from "express";
import { helloWorldHandler, greetUserHandler } from "../handlers/helloHandlers";

const router = Router();

router.get("", helloWorldHandler);
router.get("/greet/:name", greetUserHandler);

export default router;
