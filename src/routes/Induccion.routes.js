import { Router } from "express";
import { createInduccion, deleteInduccion, readInducciones, updateInduccion } from "../controllers/Induccion.controller.js";

const router = Router();

router.post("/", createInduccion);
router.get("/", readInducciones);
router.put("/:id", updateInduccion);
router.delete("/:id", deleteInduccion);

export default router;