import { Hono } from "hono";
import { requireAuthMiddleware } from "../middleware/auth";
import { AuthContext } from "../interfaces/context";

export const userRouter = new Hono<AuthContext>();

userRouter.get("/session", requireAuthMiddleware, (c) => {
  const session = c.get("session");
  const user = c.get("user");

  return c.json({
    session,
    user,
  });
});

// User profile endpoint
userRouter.get("/profile", requireAuthMiddleware, (c) => {
  const user = c.get("user");
  return c.json({ profile: user });
});
