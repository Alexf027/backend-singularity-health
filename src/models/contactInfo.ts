import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export class ContactInfo extends Model {
    public id!: number;
    public UserID!: number;
    public Address!: string;
    public CountryID!: number;
    public City!: string;
    public Phone!: string;
    public CelPhone!: string;
    public EmergencyName!: string;
    public EmergencyPhone!: string;
}

ContactInfo.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        UserID: { type: DataTypes.INTEGER, allowNull: false },
        Address: { type: DataTypes.STRING(60), allowNull: false },
        CountryID: { type: DataTypes.INTEGER, allowNull: false },
        City: { type: DataTypes.STRING(50), allowNull: false },
        Phone: { type: DataTypes.STRING(20), allowNull: true },
        CelPhone: { type: DataTypes.STRING(20), allowNull: false },
        EmergencyName: { type: DataTypes.STRING(100), allowNull: false },
        EmergencyPhone: { type: DataTypes.STRING(20), allowNull: false },
    },
    {
        sequelize,
        modelName: "ContactInfo",
        tableName: "ContactInfo_TB",
    }
);
