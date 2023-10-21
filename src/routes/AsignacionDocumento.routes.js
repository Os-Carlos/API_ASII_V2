import { Router } from "express";
import { createAsignacion, readAsignaciones, updateAsignacion, deleteAsignacion } from "../controllers/AsignacionDocumento.controller.js";

const router = Router();

router.post("/", createAsignacion);
router.get("/", readAsignaciones);
router.put("/:id", updateAsignacion);
router.delete("/:id", deleteAsignacion);

export default router;