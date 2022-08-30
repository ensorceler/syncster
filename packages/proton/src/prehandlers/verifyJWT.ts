import fastify, { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

export default function verifyJWT(
  request: FastifyRequest,
  reply: FastifyReply,
  done: any
) {
  if (request.headers.authorization != undefined) {
    let [_, token] = request.headers.authorization?.split(" ")!;
    try {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      request.jwtDecodedUser = decoded;
      done();
    } catch (err: any) {
      request.jwtDecodedUser = null;
      throw new Error(err);
    }
  } else {
    throw new Error("no authorization headers found");
  }
}
