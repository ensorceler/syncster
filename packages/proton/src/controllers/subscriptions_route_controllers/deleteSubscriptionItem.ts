import {
  FastifyInstance,
  FastifyRequest,
  RequestGenericInterface,
} from "fastify";
import deleteSubscriptionItemServices from "../../services/subscriptions_services/deleteSubscriptionServices";
type thisType = {
  fastify: FastifyInstance;
};
export const deleteSubscriptionItemHandlerJsonSchema = {
  body: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
  },
} as const;

export interface deleteSubscriptionItemRequestGeneric
  extends RequestGenericInterface {
  Body: {
    id: string;
  };
}
export async function deleteSubscriptionItemHandler(
  this: thisType,
  request: FastifyRequest<deleteSubscriptionItemRequestGeneric>,
  reply: any
) {
  const { id: sub_id } = request.body;
  const user_id = request.jwtDecodedUser.id;
  await deleteSubscriptionItemServices(this.fastify, sub_id, user_id);

  reply.code(200).send({
    message: "successfully deleted",
  });
}
