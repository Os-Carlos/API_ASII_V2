import { Documento } from "../models/Documento.model.js";

//post
export async function createDocumento(req, res) {
    const {
        nombre_documento,
        version
    } = req.body;

    try {
        let newDocumento = await Documento.create({
            nombre_documento,
            version
        }, {
            fields: [
                "nombre_documento",
                "version"
            ]
        });

        return res.json(newDocumento);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readDocumentos(req, res) {
    try {
        const documentos = await Documento.findAll();

        res.json(documentos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updateDocumento(req, res) {
    const { id } = req.params;
    const {
        nombre_documento,
        version,
    } = req.body;

    try {
        const documentos = await Documento.findByPk(id);
        documentos.nombre_documento = nombre_documento;
        documentos.version = version;
        await documentos.save();

        res.json(documentos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deleteDocumento(req, res) {
    const { id } = req.params;

    try {
        await Documento.destroy({
            where: { id_documento: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}