import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { PrismaClient } from "@prisma/client/edge"; 

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

const app = new Hono<{ Bindings: Bindings }>();


app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);

export default app;
