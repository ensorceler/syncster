import {
  FastifyInstance,
  FastifyRequest,
  RequestGenericInterface,
} from "fastify";
import editSubscriptionItemServices from "../../services/subscriptions_services/editSubscriptionItemServices";
type thisType = {
  fastify: FastifyInstance;
};

export const editSubscriptionItemHandlerJsonSchema = {
  body: {
    type: "object",
    properties: {
      sub_id: { type: "string" },
      name: { type: "string" },
      description: { type: "string" },
      category: { type: "string" },
      first_payment: { type: "string" },
      price: { type: "number" },
    },
    required: [
      "sub_id",
      "name",
      "description",
      "category",
      "first_payment",
      "price",
    ],
  },
} as const;

export interface editSubscriptionItemRequestGeneric
  extends RequestGenericInterface {
  Body: {
    sub_id: string;
    name: string;
    description: string;
    category: string;
    first_payment: string;
    price: number;
  };
}

export async function editSubscriptionItemHandler(
  this: thisType,
  request: FastifyRequest<editSubscriptionItemRequestGeneric>,
  reply: any
) {
  const jwt_decoded_userid = request.jwtDecodedUser.id;
  const response = await editSubscriptionItemServices(
    this.fastify,
    request.body,
    jwt_decoded_userid
  );

  reply.send(response);
}
