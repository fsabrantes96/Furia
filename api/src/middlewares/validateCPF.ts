import { cpf } from 'cpf-cnpj-validator';
import { Request, Response, NextFunction } from 'express';

export function isValidCPF(cpf: string): boolean {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');
  
    // Verifica se tem 11 dígitos ou se é uma sequência repetida (ex: 111.111.111-11)
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    // Validação dos dígitos verificadores (algoritmo oficial)
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;
  
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;
  
    return true;
  }

export function validateCPF(req: Request, res: Response, next: NextFunction): void {
    const { cpf } = req.body;
    if (!isValidCPF(cpf)) {
      res.status(400).json({ error: 'CPF inválido' }); // ✅ Envia a resposta
      return; // ⚠️ Não chama next(), interrompe o fluxo
    }
    next(); // ✅ Continua se o CPF for válido
  }