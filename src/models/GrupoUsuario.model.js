import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { AsignacionDocumento } from "./AsignacionDocumento.model.js";
import { Usuario } from "./Usuario.model.js";

export const GrupoUsuario = sequelize.define("grupoUsuarios", {
    id_grupo_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_grupo: {
        type: DataTypes.STRING,
        unique: true
    },
    id_departamento: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'grupo_usuario'
});

//asignaciones
GrupoUsuario.hasMany(AsignacionDocumento, {
    foreignkey: "id_grupo_usuario",
    sourceKey: "id_grupo_usuario"
});
AsignacionDocumento.belongsTo(GrupoUsuario, {
    foreignkey: "id_grupo_usuario",
    targetId: "id_grupo_usuario"
});

//asignaciones
GrupoUsuario.hasMany(Usuario, {
    foreignkey: "id_grupo_usuario",
    sourceKey: "id_grupo_usuario"
});
Usuario.belongsTo(GrupoUsuario, {
    foreignkey: "id_grupo_usuario",
    targetId: "id_grupo_usuario"
});