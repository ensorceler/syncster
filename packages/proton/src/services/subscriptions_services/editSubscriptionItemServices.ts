import { FastifyInstance } from "fastify";
import { editSubscriptionItemRequestGeneric } from "../../controllers/subscriptions_route_controllers/editSubscriptionItem";

export default async function editSubscriptionItemServices(
  fastify: FastifyInstance,
  data: editSubscriptionItemRequestGeneric["Body"],
  user_id: string
) {
  const { sub_id, name, description, category, first_payment, price } = data;

  const queryResult = await fastify.pg.query(
    "update subscriptions set name=$1, description=$2, category=$3, first_payment=$4,price=$5 where sub_id=$6 and user_id=$7",
    [name, description, category, first_payment, price, sub_id, user_id]
  );
  return queryResult;
}
