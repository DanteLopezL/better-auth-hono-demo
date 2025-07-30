import { Session } from "./session";
import { User } from "./user";

export interface AuthContext {
  Variables: {
    user: User | null;
    session: Session | null;
  };
}
