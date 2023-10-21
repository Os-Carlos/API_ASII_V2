import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const AsignacionDocumento = sequelize.define("asignacionDocumentos", {
    id_asignacion_documento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_grupo_usuario: {
        type: DataTypes.INTEGER
    },
    id_documento: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'asignacion_documento'
});

