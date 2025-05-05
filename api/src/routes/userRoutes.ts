import express from 'express';
import { UserController } from '../controllers/userController';
import { validateCPF } from '../middlewares/validateCPF';

const router = express.Router();

router.post('/register', validateCPF, UserController.register);
router.post('/login', UserController.login);
router.get('/cep/:cep', UserController.getAddressByCEP);

export default router;