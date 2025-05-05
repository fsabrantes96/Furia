import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import axios from 'axios';

export class UserController {
  static async register(req: Request, res: Response) {
    const { email, senha, nome, cpf } = req.body;
    await UserService.register(email, senha, nome, cpf);
    res.json({ message: 'Usuário cadastrado com sucesso' });
  }

  static async login(req: Request, res: Response) {
    const { email, senha } = req.body;
    try {
      const token = await UserService.login(email, senha);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async getAddressByCEP(req: Request, res: Response) {
    const { cep } = req.params;
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar CEP' });
    }
  }
}