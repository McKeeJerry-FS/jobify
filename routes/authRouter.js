import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
const router = Router();
import { validateRegisterInput } from '../middleware/validationMiddleware.js';

router.post('/register', validateRegisterInput, register);
router.post('/login', login);

export default router;