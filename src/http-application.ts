import Fastify from "fastify";
import { UsersController } from "./presentation/users-controller.js";

const fastify = Fastify();

new UsersController(fastify);

await fastify.listen({ port: 3001 });
