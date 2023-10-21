import { AsignacionDocumento } from "../models/AsignacionDocumento.model.js";

//post
export async function createAsignacion(req, res) {
    const { id_grupo_usuario, id_documento } = req.body;

    try {
        let newAsignacion = await AsignacionDocumento.create({
            id_grupo_usuario,
            id_documento
        }, {
            fields: ["id_grupo_usuario", "id_documento"]
        });

        return res.json(newAsignacion);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readAsignaciones(req, res) {
    try {
        const asignacionDocumentos = await AsignacionDocumento.findAll();

        res.json(asignacionDocumentos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updateAsignacion(req, res) {
    const { id } = req.params;
    const { id_grupo_usuario, id_documento } = req.body;

    try {
        const asignacionDocumentos = await AsignacionDocumento.findByPk(id);
        asignacionDocumentos.id_grupo_usuario = id_grupo_usuario;
        asignacionDocumentos.id_documento = id_documento;
        await asignacionDocumentos.save();

        res.json(asignacionDocumentos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deleteAsignacion(req, res) {
    const { id } = req.params;

    try {
        await AsignacionDocumento.destroy({
            where: { id_asignacion_documento: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}