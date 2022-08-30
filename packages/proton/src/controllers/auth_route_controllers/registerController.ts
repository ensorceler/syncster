import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RequestGenericInterface,
} from "fastify";
import jwt from "jsonwebtoken";

interface thisType {
  fastify: FastifyInstance;
}

export interface registerRequestGeneric extends RequestGenericInterface {
  Body: {
    email: string;
    password: string;
  };
}
export const registerRequestSchema = {
  body: {
    type: "object",
    properties: {
      email: { type: "string" },
      password: { type: "string" },
    },
    required: ["email", "password"],
  },
};

export async function registerController(
  this: thisType,
  request: FastifyRequest<registerRequestGeneric>,
  reply: FastifyReply
) {
  const { email, password } = request.body;
}
