import { FastifyInstance } from "fastify";

export default async function deleteSubscriptionItemServices(
  fastify: FastifyInstance,
  sub_id: string,
  user_id: string
) {
  try {
    await fastify.pg.query(
      "delete from subscriptions where sub_id=$1 and user_id=$2",
      [sub_id, user_id]
    );
  } catch (err: any) {
    throw new Error(err);
  }
}
