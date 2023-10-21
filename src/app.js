import express from "express";

const app = express();

// Import routes
import AsignacionDocumentoRoutes from "./routes/AsignacionDocumento.routes.js";
import ColaboradorRoutes from "./routes/Colaborador.routes.js";
import ColaboradorDetalleRoutes from "./routes/ColaboradorDetalle.routes.js";
import DepartamentoRoutes from "./routes/Departamento.routes.js";
import DocumentoRoutes from "./routes/Documento.routes.js";
import GrupoUsuarioRoutes from "./routes/GrupoUsuario.routes.js";
import InduccionRoutes from "./routes/Induccion.routes.js";
import PuestoRoutes from "./routes/Puesto.routes.js";
import UsuarioRoutes from "./routes/Usuario.routes.js";

// Middlewares
app.use(express.json());

// Routes
app.use("/asignacion_documentos", AsignacionDocumentoRoutes);
app.use("/colaboradores", ColaboradorRoutes);
app.use("/colaborador_detalles", ColaboradorDetalleRoutes);
app.use("/departamentos", DepartamentoRoutes);
app.use("/documentos", DocumentoRoutes);
app.use("/grupo_usuarios", GrupoUsuarioRoutes);
app.use("/inducciones", InduccionRoutes);
app.use("/puestos", PuestoRoutes);
app.use("/usuarios", UsuarioRoutes);

export default app;