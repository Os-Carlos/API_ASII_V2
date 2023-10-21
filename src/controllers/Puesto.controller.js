import { Puesto } from "../models/Puesto.model.js";

//post
export async function createPuesto(req, res) {
    const {
        descripcion,
        id_departamento
    } = req.body;

    try {
        let newPuesto = await Puesto.create({
            descripcion,
            id_departamento
        }, {
            fields: [
                "descripcion",
                "id_departamento"
            ]
        });

        return res.json(newPuesto);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readPuestos(req, res) {
    try {
        const puestos = await Puesto.findAll();

        res.json(puestos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updatePuesto(req, res) {
    const { id } = req.params;
    const {
        descripcion,
        id_departamento
    } = req.body;

    try {
        const puestos = await Puesto.findByPk(id);
        puestos.descripcion = descripcion;
        puestos.id_departamento = id_departamento;
        await puestos.save();

        res.json(puestos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deletePuesto(req, res) {
    const { id } = req.params;

    try {
        await Puesto.destroy({
            where: { id_puesto: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}