import { Router } from "express";
import { createPuesto, deletePuesto, readPuestos, updatePuesto } from "../controllers/Puesto.controller.js";

const router = Router();

router.post("/", createPuesto);
router.get("/", readPuestos);
router.put("/:id", updatePuesto);
router.delete("/:id", deletePuesto);

export default router;