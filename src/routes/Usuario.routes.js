import { Router } from "express";
import { createUsuario, deleteUsuario, readUsuarios, updateUsuario } from "../controllers/Usuario.controller.js";

const router = Router();

router.post("/", createUsuario);
router.get("/", readUsuarios);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

export default router;