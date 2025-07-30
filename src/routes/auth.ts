import { Hono } from "hono";
import { auth } from "../lib/auth";

export const authRouter = new Hono();

// Better Auth handler - handles sign-in, sign-up, sign-out, etc.
authRouter.on(["POST", "GET"], "/**", (c) => auth.handler(c.req.raw));
