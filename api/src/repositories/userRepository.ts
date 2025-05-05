import { connectDB } from '../database/db';

export class UserRepository {
  static async findByEmail(email: string) {
    const db = await connectDB();
    return db.get('SELECT * FROM usuarios WHERE email = ?', [email]);
  }

  static async createUser(email: string, hashedPassword: string, nome: string, cpf: string) {
    const db = await connectDB();
    return db.run('INSERT INTO usuarios (email, senha, nome, cpf) VALUES (?, ?, ?, ?)', [email, hashedPassword, nome, cpf]);
  }
}