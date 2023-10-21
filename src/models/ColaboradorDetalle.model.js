import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ColaboradorDetalle = sequelize.define("colaboradorDetalles", {
    id_colaborador_detalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_colaborador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY
    },
    cuenta_bancaria: {
        type: DataTypes.STRING
    },
    fecha_contratacion: {
        type: DataTypes.DATEONLY
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'colaborador_detalle'
});