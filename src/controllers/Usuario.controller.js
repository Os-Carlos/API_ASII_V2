import { Usuario } from "../models/Usuario.model.js";

//post
export async function createUsuario(req, res) {
    const {
        codigo_colaborador,
        nombre_usuario,
        clave,
        tipo_usuario,
        id_grupo_usuario
    } = req.body;

    try {
        let newUsuario = await Usuario.create({
            codigo_colaborador,
            nombre_usuario,
            clave,
            tipo_usuario,
            id_grupo_usuario
        }, {
            fields: [
                "codigo_colaborador",
                "nombre_usuario",
                "clave",
                "tipo_usuario",
                "id_grupo_usuario"
            ]
        });

        return res.json(newUsuario);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    res.json("received");
}

//get all
export async function readUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll();

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//put
export async function updateUsuario(req, res) {
    const { id } = req.params;
    const {
        codigo_colaborador,
        nombre_usuario,
        clave,
        tipo_usuario,
        id_grupo_usuario
    } = req.body;

    try {
        const usuarios = await Usuario.findByPk(id);
        usuarios.codigo_colaborador = codigo_colaborador;
        usuarios.nombre_usuario = nombre_usuario;
        usuarios.clave = clave;
        usuarios.tipo_usuario = tipo_usuario;
        usuarios.id_grupo_usuario = id_grupo_usuario;
        await usuarios.save();

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//delete
export async function deleteUsuario(req, res) {
    const { id } = req.params;

    try {
        await Usuario.destroy({
            where: { id_usuario: id }
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}