import type { Context, Next } from "hono";

export const requireAuthMiddleware = async (c: Context, next: Next) => {
  const user = c.get("user");
  const session = c.get("session");

  if (!user || !session) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  return next();
};
