import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Colaborador } from "./Colaborador.model.js";

export const Puesto = sequelize.define("puestos", {
    id_puesto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    id_departamento: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'puestos'
});

//colaboradores
Puesto.hasMany(Colaborador, {
    foreignkey: "id_puesto",
    sourceKey: "id_puesto"
});
Colaborador.belongsTo(Puesto, {
    foreignkey: "id_puesto",
    targetId: "id_puesto"
});