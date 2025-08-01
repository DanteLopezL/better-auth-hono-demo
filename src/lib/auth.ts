import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { openAPI, bearer, jwt } from "better-auth/plugins";

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:5173"],
  plugins: [openAPI(), bearer(), jwt()],
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      username: {
        type: "string",
        required: false,
      },
    },
  },
});
