import { createMiddleware } from "hono/factory";

export const requireAuthMiddleware = createMiddleware(async (c, next) => {
  const user = c.get("user");
  const session = c.get("session");

  if (!user || !session) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  return await next();
});
