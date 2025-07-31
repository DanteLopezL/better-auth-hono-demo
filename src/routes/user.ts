import { Hono } from "hono";
import { requireAuthMiddleware } from "../middleware/auth";
import { AuthContext } from "../interfaces/context";

export const userRouter = new Hono<AuthContext>();

userRouter.get("/me", requireAuthMiddleware, (c) => {
  const user = c.get("user")!;
  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
});
