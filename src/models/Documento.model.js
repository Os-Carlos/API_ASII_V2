import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { AsignacionDocumento } from "./AsignacionDocumento.model.js";

export const Documento = sequelize.define("documentos", {
    id_documento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_documento: {
        type: DataTypes.STRING
    },
    version: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'documentos'
});

//asignaciones
Documento.hasMany(AsignacionDocumento, {
    foreignkey: "id_documento",
    sourceKey: "id_documento"
});
AsignacionDocumento.belongsTo(Documento, {
    foreignkey: "id_documento",
    targetId: "id_documento"
});