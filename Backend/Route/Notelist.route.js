import { getNotelist } from "../controller/Notelist.controller.js";
import express from "express";

const router = express.Router();

router.get('/', getNotelist);

export default router;
