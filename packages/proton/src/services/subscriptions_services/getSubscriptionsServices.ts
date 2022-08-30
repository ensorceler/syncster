import { FastifyInstance } from "fastify";

export default async function getSubscriptionsServices(
  fastify: FastifyInstance,
  id: string
) {
  const queryResponse = await fastify.pg.query(
    "select * from subscriptions where user_id=$1",
    [id]
  );
  return queryResponse;
}
