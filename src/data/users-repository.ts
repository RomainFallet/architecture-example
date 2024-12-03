type User = Readonly<{
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}>;

import { pool } from "./postgresql.js";

class UsersRepository {
  async get(userEmail: User["email"]): Promise<User | undefined> {
    const queryResult = await pool.query<User>(
      "SELECT id, email, firstname, lastname FROM user_account WHERE user_account.email = $1",
      [userEmail]
    );
    return queryResult.rows[0];
  }

  async create(user: Omit<User, "id">): Promise<void> {
    await pool.query(
      "INSERT INTO user_account(email, firstname, lastname) VALUES($1, $2, $3)",
      [user.email, user.firstname, user.lastname]
    );
  }
}
export { UsersRepository };
export type { User };
