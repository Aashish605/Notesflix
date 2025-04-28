import {getNotepdf} from '../controller/Notepdf.controller.js';  

import express from 'express';

const router = express.Router();

router.get('/', getNotepdf);

export default router;