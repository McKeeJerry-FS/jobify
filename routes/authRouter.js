import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
const router = Router();
import { validateRegisterInput, validateLoginInput } from '../middleware/validationMiddleware.js';

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);

export default router;