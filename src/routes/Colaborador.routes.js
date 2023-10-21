import { Router } from "express";
import { createColaborador, deleteColaborador, readColaboradores, updateColaborador } from "../controllers/Colaborador.controller.js";

const router = Router();

router.post("/", createColaborador);
router.get("/", readColaboradores);
router.put("/:id", updateColaborador);
router.delete("/:id", deleteColaborador);

export default router;