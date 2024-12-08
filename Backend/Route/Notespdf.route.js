import {getpdf} from '../controller/Notespdf.controller.js';  

import express from 'express';

const router = express.Router();

router.get('/', getpdf);

export default router;