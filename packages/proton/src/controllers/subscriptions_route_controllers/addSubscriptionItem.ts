import {
  FastifyInstance,
  FastifyRequest,
  RequestGenericInterface,
} from "fastify";
import addSubscriptionsServices from "../../services/subscriptions_services/addSubscriptionsServices";
type thisType = {
  fastify: FastifyInstance;
};
export const addSubscriptionItemJsonSchema = {
  body: {
    type: "object",
    properties: {
      user_id: { type: "string" },
      name: { type: "string" },
      description: { type: "string" },
      category: { type: "string" },
      first_payment: { type: "string" },
      price: { type: "number" },
    },
    required: [
      "user_id",
      "name",
      "description",
      "category",
      "first_payment",
      "price",
    ],
  },
} as const;

export interface addSubscriptionItemRequestGeneric
  extends RequestGenericInterface {
  Body: {
    user_id: string;
    name: string;
    description: string;
    category: string;
    first_payment: string;
    price: number;
  };
}

export async function addSubscriptionsItemHandler(
  this: thisType,
  request: FastifyRequest<addSubscriptionItemRequestGeneric>,
  reply: any
) {
  const jwt_decoded_user_id = request.jwtDecodedUser.id;
  const request_body_id = request.body.user_id;

  if (jwt_decoded_user_id !== request_body_id) {
    reply.code(400).send("Not authorized");
  }
  await addSubscriptionsServices(this.fastify, request.body);
  reply.code(200).send({
    success: true,
    msg: "successfully added to the subscriptions list",
  });
}
