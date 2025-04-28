import { getsyllabuspdf } from '../controller/SyllabusPdf.controller.js';

import express from 'express';

const router = express.Router();

router.get('/', getsyllabuspdf);

export default router;