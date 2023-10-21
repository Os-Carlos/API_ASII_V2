import { Induccion } from "../models/Induccion.model.js";

//post
export async function createInduccion(req, res) {
    const {
        codigo_colaborador,
        descripcion,
        fecha_inicio,
        estado
    } = req.body;

    try {
        let newInduccion = await Induccion.create({
            codigo_colaborador,
            descripcion,
            fecha_inicio,
            estado
        }, {
            fields: [
                "codigo_colaborador",
                "descripcion",
                "fecha_inicio",
                "estado"
            ]
        });

        return res.json(newInduccion);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readInducciones(req, res) {
    try {
        const inducciones = await Induccion.findAll();

        res.json(inducciones);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updateInduccion(req, res) {
    const { id } = req.params;
    const {
        codigo_colaborador,
        descripcion,
        fecha_inicio,
        estado
    } = req.body;

    try {
        const inducciones = await Induccion.findByPk(id);
        inducciones.codigo_colaborador = codigo_colaborador;
        inducciones.descripcion = descripcion;
        inducciones.fecha_inicio = fecha_inicio;
        inducciones.estado = estado;
        await inducciones.save();

        res.json(inducciones);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deleteInduccion(req, res) {
    const { id } = req.params;

    try {
        await Induccion.destroy({
            where: { id_induccion: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}