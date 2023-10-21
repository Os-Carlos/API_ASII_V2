import { Router } from "express";
import { createDepartamento, deleteDepartamento, readDepartamentos, updateDepartamento } from "../controllers/Departamento.controller.js";

const router = Router();

router.post("/", createDepartamento);
router.get("/", readDepartamentos);
router.put("/:id", updateDepartamento);
router.delete("/:id", deleteDepartamento);

export default router;