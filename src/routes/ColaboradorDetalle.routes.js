import { Router } from "express";
import { createColaboradorDetalle, deleteColaboradorDetalle, readColaboradorDetallees, updateColaboradorDetalle } from "../controllers/ColaboradorDetalle.controller.js";

const router = Router();

router.post("/", createColaboradorDetalle);
router.get("/", readColaboradorDetallees);
router.put("/:id", updateColaboradorDetalle);
router.delete("/:id", deleteColaboradorDetalle);

export default router;