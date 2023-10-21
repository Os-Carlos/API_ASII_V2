import { GrupoUsuario } from "../models/GrupoUsuario.model.js";

//post
export async function createGrupoUsuario(req, res) {
    const {
        nombre_grupo,
        id_departamento
    } = req.body;

    try {
        let newGrupoUsuario = await GrupoUsuario.create({
            nombre_grupo,
            id_departamento
        }, {
            fields: [
                "nombre_grupo",
                "id_departamento"
            ]
        });

        return res.json(newGrupoUsuario);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readGrupoUsuarios(req, res) {
    try {
        const grupoUsuarios = await GrupoUsuario.findAll();

        res.json(grupoUsuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updateGrupoUsuario(req, res) {
    const { id } = req.params;
    const {
        nombre_grupo,
        id_departamento
    } = req.body;

    try {
        const grupoUsuarios = await GrupoUsuario.findByPk(id);
        grupoUsuarios.nombre_grupo = nombre_grupo;
        grupoUsuarios.id_departamento = id_departamento;
        await grupoUsuarios.save();

        res.json(grupoUsuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deleteGrupoUsuario(req, res) {
    const { id } = req.params;

    try {
        await GrupoUsuario.destroy({
            where: { id_grupo_usuario: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}