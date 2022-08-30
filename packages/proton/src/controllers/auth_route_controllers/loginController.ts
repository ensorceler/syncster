import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RequestGenericInterface,
} from "fastify";
import jwt from "jsonwebtoken";
import signJWTToken from "../../utils/signJWTToken";

const privateKey = "aba92eba-1edc-11ed-861d-0242ac120002";
interface thisType {
  fastify: FastifyInstance;
}

export interface loginRequestGeneric extends RequestGenericInterface {
  Body: {
    email: string;
    password: string;
  };
}
export const loginRequestSchema = {
  body: {
    type: "object",
    properties: {
      email: { type: "string" },
      password: { type: "string" },
    },
    required: ["email", "password"],
  },
};

export async function loginHandler(
  this: thisType,
  request: FastifyRequest<loginRequestGeneric>,
  reply: FastifyReply
) {
  const { email, password } = request.body;

  const response = await this.fastify.pg.query(
    "select * from users where email=$1 and password=$2",
    [email, password]
  );
  if (response.rows.length > 0) {
    let token = signJWTToken(response.rows[0]);
    reply.send({ access_token: token });
  } else {
    reply.code(404).send({ message: "no such users found" });
  }
}
