import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import getSubscriptionsServices from "../../services/subscriptions_services/getSubscriptionsServices";

// unsafe code for now
interface ThisType {
  fastify: FastifyInstance;
}

export async function getSubscriptionsHandler(
  this: ThisType,
  request: FastifyRequest,
  reply: FastifyReply
) {
  const user_id = request.jwtDecodedUser.id;
  const response = await getSubscriptionsServices(this.fastify, user_id);
  reply.send(response);
}
