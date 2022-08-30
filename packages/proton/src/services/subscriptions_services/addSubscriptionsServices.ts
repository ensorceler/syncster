import { FastifyInstance } from "fastify";
import { addSubscriptionItemRequestGeneric } from "../../controllers/subscriptions_route_controllers/addSubscriptionItem";

export default async function addSubscriptionsServices(
  fastify: FastifyInstance,
  data: addSubscriptionItemRequestGeneric["Body"]
) {
  const { user_id, name, description, category, first_payment, price } = data;

  const queryResponse = await fastify.pg.query(
    "insert into subscriptions(user_id,name,description,category,first_payment,price) values($1,$2,$3,$4,$5,$6)",
    [user_id, name, description, category, first_payment, price]
  );

  return queryResponse.rows;
}
