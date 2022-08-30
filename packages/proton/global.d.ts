export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      POSTGRES_DB_PASSWORD?: string;
      SUPABASE_URL: string;
      SUPABASE_ANON_KEY: string;
      JWT_SECRET: string;
    }
  }
}

declare module "fastify" {
  interface FastifyRequest {
    jwtDecodedUser: any;
  }
}
