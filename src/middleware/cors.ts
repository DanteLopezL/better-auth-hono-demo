import { cors } from "hono/cors";

export const corsMiddleware = cors({
  origin: ["http://localhost:5173"],
  allowHeaders: ["Content-Type", "Authorization", "Cookie"],
  allowMethods: ["POST", "GET"],
  credentials: true,
});
