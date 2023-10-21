import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Induccion = sequelize.define("inducciones", {
    id_induccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo_colaborador: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fecha_inicio: {
        type: DataTypes.DATEONLY
    },
    fecha_fin: {
        type: DataTypes.DATEONLY
    },
    estado: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'inducciones'
});