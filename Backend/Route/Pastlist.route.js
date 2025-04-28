import { getPastlist } from "../controller/Pastlist.controller.js";

import express from "express"

const router = express.Router()

router.get("/",getPastlist)

export default router;