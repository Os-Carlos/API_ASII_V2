import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ColaboradorDetalle } from "./ColaboradorDetalle.model.js";
import { Induccion } from "./Induccion.model.js";
import { Usuario } from "./Usuario.model.js";

export const Colaborador = sequelize.define("colaboradores", {
    id_colaborador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo_colaborador: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    nombre_completo: {
        type: DataTypes.STRING
    },
    id_puesto: {
        type: DataTypes.INTEGER
    },
    salario: {
        type: DataTypes.FLOAT
    },
    horario: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'colaboradores'
});

//info personal
Colaborador.hasMany(ColaboradorDetalle, {
    foreignkey: "id_colaborador",
    sourceKey: "id_colaborador"
});
ColaboradorDetalle.belongsTo(Colaborador, {
    foreignkey: "id_colaborador",
    targetId: "id_colaborador"
});

//inducciones
Colaborador.hasMany(Induccion, {
    foreignkey: "codigo_colaborador",
    sourceKey: "codigo_colaborador"
});
Induccion.belongsTo(Colaborador, {
    foreignkey: "codigo_colaborador",
    targetId: "codigo_colaborador"
});

//usuarios
Colaborador.hasMany(Usuario, {
    foreignkey: "codigo_colaborador",
    sourceKey: "codigo_colaborador"
});
Usuario.belongsTo(Colaborador, {
    foreignkey: "codigo_colaborador",
    targetId: "codigo_colaborador"
});
