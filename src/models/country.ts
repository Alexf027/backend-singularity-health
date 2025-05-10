import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export class Country extends Model {
    public id!: number;
    public CountryCode!: string;
    public CountryName!: string;
}

Country.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        CountryCode: { type: DataTypes.STRING(4), allowNull: false },
        CountryName: { type: DataTypes.STRING(100), allowNull: false },
    },
    {
        sequelize,
        modelName: "Country",
        tableName: "Country_TB",
    }
);
