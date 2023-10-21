import { Router } from "express";
import { createGrupoUsuario, deleteGrupoUsuario, readGrupoUsuarios, updateGrupoUsuario } from "../controllers/GrupoUsuario.controller.js";

const router = Router();

router.post("/", createGrupoUsuario);
router.get("/", readGrupoUsuarios);
router.put("/:id", updateGrupoUsuario);
router.delete("/:id", deleteGrupoUsuario);

export default router;