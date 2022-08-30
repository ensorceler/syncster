import fastifyAuth from "@fastify/auth";
import fastifyPostgres from "@fastify/postgres";
import Fastify from "fastify";
import { authRouter } from "./routes/auth";
import subscriptionsRouter from "./routes/subscriptions";

const fastify_app = Fastify({
  logger: true,
});

fastify_app.register(fastifyPostgres, {
  connectionString: `postgresql://postgres:${process.env.POSTGRES_DB_PASSWORD}@db.ocgyqodqptulkgdisenp.supabase.co:5432/postgres`,
});
fastify_app.register(fastifyAuth);
fastify_app.register(subscriptionsRouter);
fastify_app.register(authRouter);

export default fastify_app;
