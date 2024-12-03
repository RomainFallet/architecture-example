import type { FastifyInstance } from "fastify";

import { UsersService } from "../business/users-service.js";

class UsersController {
  constructor(private fastify: FastifyInstance) {
    this.fastify.post("/users", async (request, reply) => {
      const body = request.body as any;
      const usersService = new UsersService();

      try {
        await usersService.registerUser(
          body.email,
          body.firstname,
          body.lastname
        );
        reply.code(204).send();
      } catch (error) {
        console.error(error);
        reply.code(400).send();
      }
    });
  }
}

export { UsersController };
