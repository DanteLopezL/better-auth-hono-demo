import { Context, Next } from "hono";
import { auth } from "../lib/auth";

export const sessionMiddleware = async (c: Context, next: Next) => {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (session) {
    c.set("user", session.user);
    c.set("session", session.session);
  } else {
    c.set("user", null);
    c.set("session", null);
  }

  return next();
};
