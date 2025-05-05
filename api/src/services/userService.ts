import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/userRepository';

export class UserService {
  static async register(email: string, senha: string, nome: string, cpf: string) {
    const hashedPassword = await bcrypt.hash(senha, 10);
    return UserRepository.createUser(email, hashedPassword, nome, cpf);
  }

  static async login(email: string, senha: string) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error('Usuário não encontrado');
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) throw new Error('Senha incorreta');
    const token = jwt.sign({ userId: user.id }, 'secreto_jwt', { expiresIn: '1h' });
    return token;
  }
}