import { getSyllabuslist } from "../controller/Syllabuslist.controller.js";

import express from "express";


const router = express.Router()

router.get("/",getSyllabuslist)

export default router