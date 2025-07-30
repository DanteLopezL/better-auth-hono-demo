import { Hono } from "hono";
import { AuthContext } from "./interfaces/context";
import { corsMiddleware } from "./middleware/cors";
import { sessionMiddleware } from "./middleware/session";
import { authRouter } from "./routes/auth";
import { healthRouter } from "./routes/healthcheck";
import { userRouter } from "./routes/user";
import { logger } from "hono/logger";

//Main Hono instance
const app = new Hono<AuthContext>().basePath("/api");

//Middleware
app.use(logger());
app.use("*", corsMiddleware);
app.use("*", sessionMiddleware);

//Routes
app.route("/healthcheck", healthRouter);
app.route("/user", userRouter);
app.route("/auth", authRouter);

// Fallback route
app.notFound((c) => {
  return c.json({ error: "Route not found" }, 404);
});

// Error handling
app.onError((err, c) => {
  console.error("Server error:", err);
  return c.json({ error: "Internal server error" }, 500);
});

export default {
  port: Bun.env.PORT || 3000,
  fetch: app.fetch,
};
