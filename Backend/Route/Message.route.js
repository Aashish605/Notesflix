import express from 'express';
import { createMessage } from '../controller/Message.controller.js';

const router = express.Router()

router.post('/', createMessage);

export default router;