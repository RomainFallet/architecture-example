import { UsersRepository } from "../data/users-repository.js";

class UsersService {
  async registerUser(email: string, firstname: string, lastname: string) {
    const usersRepository = new UsersRepository();

    if (!/@mycompany\.com$/.test(email)) {
      throw new Error("Registration failed: user is not in the company!");
    }

    const existingUser = await usersRepository.get(email);
    if (existingUser) {
      throw new Error("Registration failed: user already exist!");
    }

    await usersRepository.create({ email, firstname, lastname });
  }
}

export { UsersService };
