import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Usuario = sequelize.define("usuarios", {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo_colaborador: {
        type: DataTypes.STRING
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        unique: true
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_usuario: {
        type: DataTypes.STRING
    },
    id_grupo_usuario: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'usuarios'
});