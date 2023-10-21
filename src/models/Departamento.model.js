import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Puesto } from "./Puesto.model.js";
import { GrupoUsuario } from "./GrupoUsuario.model.js";

export const Departamento = sequelize.define("departamentos", {
    id_departamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'departamentos'
});

//puestos
Departamento.hasMany(Puesto, {
    foreignkey: "id_departamento",
    sourceKey: "id_departamento"
});
Puesto.belongsTo(Departamento, {
    foreignkey: "id_departamento",
    targetId: "id_departamento"
});

//grupos
Departamento.hasMany(GrupoUsuario, {
    foreignkey: "id_departamento",
    sourceKey: "id_departamento"
});
GrupoUsuario.belongsTo(Departamento, {
    foreignkey: "id_departamento",
    targetId: "id_departamento"
});