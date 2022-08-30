import { FastifyInstance } from "fastify";
import {
  addSubscriptionItemJsonSchema,
  addSubscriptionsItemHandler,
  addSubscriptionItemRequestGeneric,
} from "../../controllers/subscriptions_route_controllers/addSubscriptionItem";
import {
  deleteSubscriptionItemHandler,
  deleteSubscriptionItemHandlerJsonSchema,
  deleteSubscriptionItemRequestGeneric,
} from "../../controllers/subscriptions_route_controllers/deleteSubscriptionItem";
import {
  editSubscriptionItemHandler,
  editSubscriptionItemHandlerJsonSchema,
  editSubscriptionItemRequestGeneric,
} from "../../controllers/subscriptions_route_controllers/editSubscriptionItem";
import {
  getSubscriptionItemHandler,
  getSubscriptionItemJsonSchema,
  getSubscriptionItemsRequestGeneric,
} from "../../controllers/subscriptions_route_controllers/getSubscriptionItem";
import { getSubscriptionsHandler } from "../../controllers/subscriptions_route_controllers/getSubscriptions";
import verifyJWT from "../../prehandlers/verifyJWT";

async function subscriptionsRouter(fastify: FastifyInstance, opts: any) {
  fastify.decorateRequest("jwtDecodedUser", null);
  // "get" subscriptions list
  fastify.route({
    method: "GET",
    url: "/subscriptions",
    preHandler: fastify.auth([verifyJWT]),
    handler: getSubscriptionsHandler.bind({ fastify: fastify }),
  });

  // "get" subscription list item (/:id)

  fastify.route<getSubscriptionItemsRequestGeneric>({
    method: "GET",
    url: "/subscriptions/:id",
    schema: getSubscriptionItemJsonSchema,
    preHandler: fastify.auth([verifyJWT]),
    handler: getSubscriptionItemHandler.bind({ fastify: fastify }),
  });

  // "post" add item to the subscriptions list

  fastify.route<addSubscriptionItemRequestGeneric>({
    method: "POST",
    url: "/subscriptions/add",
    schema: addSubscriptionItemJsonSchema,
    preHandler: fastify.auth([verifyJWT]),
    handler: addSubscriptionsItemHandler.bind({ fastify: fastify }),
  });

  // "put" edit existing item in the subscriptions list

  fastify.route<editSubscriptionItemRequestGeneric>({
    method: "PUT",
    url: "/subscriptions/edit",
    schema: editSubscriptionItemHandlerJsonSchema,
    preHandler: fastify.auth([verifyJWT]),
    handler: editSubscriptionItemHandler.bind({ fastify: fastify }),
  });

  // "delete" delete existing item in the subscription list

  fastify.route<deleteSubscriptionItemRequestGeneric>({
    method: "DELETE",
    url: "/subscriptions/delete",
    schema: deleteSubscriptionItemHandlerJsonSchema,
    preHandler: fastify.auth([verifyJWT]),
    handler: deleteSubscriptionItemHandler.bind({ fastify: fastify }),
  });
}

export default subscriptionsRouter;
