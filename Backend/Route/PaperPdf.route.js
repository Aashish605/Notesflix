import { getpdf } from '../controller/PaperPdf.controller.js';

import express from 'express';

const router = express.Router();

router.get('/', getpdf);

export default router;