import { FastifyInstance } from "fastify";
import {
  loginHandler,
  loginRequestGeneric,
  loginRequestSchema,
} from "../../controllers/auth_route_controllers/loginController";
import {
  registerController,
  registerRequestGeneric,
  registerRequestSchema,
} from "../../controllers/auth_route_controllers/registerController";

export async function authRouter(fastify: FastifyInstance) {
  fastify.route<registerRequestGeneric>({
    method: "POST",
    url: "/register",
    schema: registerRequestSchema,
    handler: registerController.bind({ fastify: fastify }),
  });
  fastify.route<loginRequestGeneric>({
    method: "POST",
    url: "/login",
    schema: loginRequestSchema,
    handler: loginHandler.bind({ fastify: fastify }),
  });
}
