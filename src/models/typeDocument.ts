import sequelize from "../config/database";
import { Model, DataTypes } from "sequelize";

export class TypeDocument extends Model {
    public id!: number;
    public NameTypeDocument!: string;
}

TypeDocument.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        NameTypeDocument: { type: DataTypes.STRING(50), allowNull: false },
    },
    {
        sequelize,
        modelName: "TypeDocument",
        tableName: "TypeDocument_TB",
    }
);
