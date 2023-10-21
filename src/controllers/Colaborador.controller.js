import { Colaborador } from "../models/Colaborador.model.js";

//post
export async function createColaborador(req, res) {
    const {
        codigo_colaborador,
        nombre_completo,
        id_puesto,
        salario,
        horario
    } = req.body;

    try {
        let newColaborador = await Colaborador.create({
            codigo_colaborador,
            nombre_completo,
            id_puesto,
            salario,
            horario
        }, {
            fields: [
                "codigo_colaborador",
                "nombre_completo",
                "id_puesto",
                "salario",
                "horario"
            ]
        });

        return res.json(newColaborador);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readColaboradores(req, res) {
    try {
        const colaboradores = await Colaborador.findAll();

        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updateColaborador(req, res) {
    const { id } = req.params;
    const {
        codigo_colaborador,
        nombre_completo,
        id_puesto,
        salario,
        horario
    } = req.body;

    try {
        const colaboradores = await Colaborador.findByPk(id);
        colaboradores.codigo_colaborador = codigo_colaborador;
        colaboradores.nombre_completo = nombre_completo;
        colaboradores.id_puesto = id_puesto;
        colaboradores.salario = salario;
        colaboradores.horario = horario;
        await colaboradores.save();

        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deleteColaborador(req, res) {
    const { id } = req.params;

    try {
        await Colaborador.destroy({
            where: { id_colaborador: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}