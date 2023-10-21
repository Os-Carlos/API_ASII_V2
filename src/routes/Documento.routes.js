import { Router } from "express";
import { createDocumento, deleteDocumento, readDocumentos, updateDocumento } from "../controllers/Documento.controller.js";

const router = Router();

router.post("/", createDocumento);
router.get("/", readDocumentos);
router.put("/:id", updateDocumento);
router.delete("/:id", deleteDocumento);

export default router;