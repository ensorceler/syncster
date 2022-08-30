import dotenv from "dotenv";
import fastify_app from "./app";

dotenv.config();
const port = process.env.PORT || 3000;

fastify_app.listen({ port: port }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
