import { Departamento } from "../models/Departamento.model.js";

//post
export async function createDepartamento(req, res) {
    const {
        descripcion
    } = req.body;

    try {
        let newDepartamento = await Departamento.create({
            descripcion
        }, {
            fields: [
                "descripcion"
            ]
        });

        return res.json(newDepartamento);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readDepartamentos(req, res) {
    try {
        const departamentos = await Departamento.findAll();

        res.json(departamentos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updateDepartamento(req, res) {
    const { id } = req.params;
    const {
        descripcion
    } = req.body;

    try {
        const departamentos = await Departamento.findByPk(id);
        departamentos.descripcion = descripcion;
        await departamentos.save();

        res.json(departamentos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deleteDepartamento(req, res) {
    const { id } = req.params;

    try {
        await Departamento.destroy({
            where: { id_departamento: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}