import { FastifyInstance } from "fastify";

export default async function getSubscriptionItemServices(
  fastify: FastifyInstance,
  user_id: string,
  sub_id: string
) {
  const queryResult = await fastify.pg.query(
    "select * from subscriptions where user_id=$1 and sub_id=$2 ",
    [user_id, sub_id]
  );
  return queryResult.rows;
}
