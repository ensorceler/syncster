import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function signJWTToken(userData: any) {
  let access_token = jwt.sign(userData, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
  return access_token;
}
