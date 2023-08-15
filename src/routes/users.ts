import express from "express";
import { getEvolutionChain } from "../controller/request";

const router = express.Router();

router.get("getevolution", getEvolutionChain)

export default router