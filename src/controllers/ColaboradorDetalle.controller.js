import { ColaboradorDetalle } from "../models/ColaboradorDetalle.model.js";

//post
export async function createColaboradorDetalle(req, res) {
    const {
        id_colaborador,
        direccion,
        telefono,
        correo,
        fecha_nacimiento,
        cuenta_bancaria,
        fecha_contratacion
    } = req.body;

    try {
        let newColaboradorDetalle = await ColaboradorDetalle.create({
            id_colaborador,
            direccion,
            telefono,
            correo,
            fecha_nacimiento,
            cuenta_bancaria,
            fecha_contratacion
        }, {
            fields: [
                "id_colaborador",
                "direccion",
                "telefono",
                "correo",
                "fecha_nacimiento",
                "cuenta_bancaria",
                "fecha_contratacion"
            ]
        });

        return res.json(newColaboradorDetalle);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readColaboradorDetallees(req, res) {
    try {
        const colaboradorDetalles = await ColaboradorDetalle.findAll();

        res.json(colaboradorDetalles);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updateColaboradorDetalle(req, res) {
    const { id } = req.params;
    const {
        id_colaborador,
        direccion,
        telefono,
        correo,
        fecha_nacimiento,
        cuenta_bancaria,
        fecha_contratacion
    } = req.body;

    try {
        const colaboradorDetalles = await ColaboradorDetalle.findByPk(id);
        colaboradorDetalles.id_colaborador = id_colaborador;
        colaboradorDetalles.direccion = direccion;
        colaboradorDetalles.telefono = telefono;
        colaboradorDetalles.correo = correo;
        colaboradorDetalles.fecha_nacimiento = fecha_nacimiento;
        colaboradorDetalles.cuenta_bancaria = cuenta_bancaria;
        colaboradorDetalles.fecha_contratacion = fecha_contratacion;
        await colaboradorDetalles.save();

        res.json(colaboradorDetalles);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deleteColaboradorDetalle(req, res) {
    const { id } = req.params;

    try {
        await ColaboradorDetalle.destroy({
            where: { id_colaborador_detalle: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}