import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RequestGenericInterface,
} from "fastify";
import getSubscriptionItemServices from "../../services/subscriptions_services/getSubscriptionItemServices";

interface thisType {
  fastify: FastifyInstance;
}

export const getSubscriptionItemJsonSchema = {
  params: {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
  },
} as const;

export interface getSubscriptionItemsRequestGeneric
  extends RequestGenericInterface {
  Params: {
    id: string;
  };
}

export async function getSubscriptionItemHandler(
  this: thisType,
  request: FastifyRequest<getSubscriptionItemsRequestGeneric>,
  reply: FastifyReply
) {
  const { id: sub_id } = request.params;
  const user_id = request.jwtDecodedUser.id;
  const response = await getSubscriptionItemServices(
    this.fastify,
    user_id,
    sub_id
  );

  reply.send(response);
}
