import { Hono, TypedResponse } from "hono";
import { Healthcheck } from "../interfaces/healthcheck";

export const healthRouter = new Hono();

healthRouter.get("", (c): TypedResponse<Healthcheck, 200> => {
  return c.json({
    status: "OK",
    service: "Auth",
    timestamp: new Date(),
  });
});
