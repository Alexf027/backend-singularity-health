import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export class UserDocument extends Model {
    public id!: number;
    public UserID!: number;
    public Document!: string;
    public TypeDocumentID!: number;
    public PlaceExpedition!: string;
    public DateExpedition!: Date;
}

UserDocument.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        UserID: { type: DataTypes.INTEGER, allowNull: false },
        Document: { type: DataTypes.STRING, allowNull: false },
        TypeDocumentID: { type: DataTypes.INTEGER, allowNull: false },
        PlaceExpedition: { type: DataTypes.STRING(60), allowNull: false },
        DateExpedition: { type: DataTypes.DATEONLY, allowNull: false },
    },
    {
        sequelize,
        modelName: "UserDocument",
        tableName: "UserDocument_TB",
    }
);
