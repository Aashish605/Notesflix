import { getpastpdf } from '../controller/PastPdf.controller.js';

import express from 'express';

const router = express.Router();

router.get('/', getpastpdf);

export default router;