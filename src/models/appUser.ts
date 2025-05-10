import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

export interface AppUserAttributes {
    id: number;
    LastName: string;
    Name: string;
    IsMilitar: boolean;
    TimeCreate: Date;
    isTemporal: boolean;
    username: string;
    password: string;
    email: string;
    emailVerified?: boolean;
    verificationToken?: string;
}

export interface AppUserCreationAttributes
    extends Optional<
        AppUserAttributes,
        "id" | "emailVerified" | "verificationToken"
    > {}

export class AppUser
    extends Model<AppUserAttributes, AppUserCreationAttributes>
    implements AppUserAttributes
{
    public id!: number;
    public LastName!: string;
    public Name!: string;
    public IsMilitar!: boolean;
    public TimeCreate!: Date;
    public isTemporal!: boolean;
    public username!: string;
    public password!: string;
    public email!: string;
    public emailVerified?: boolean;
    public verificationToken?: string;
}

AppUser.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        LastName: { type: DataTypes.STRING(20), allowNull: false },
        Name: { type: DataTypes.STRING(20), allowNull: false },
        IsMilitar: { type: DataTypes.BOOLEAN, allowNull: false },
        TimeCreate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        isTemporal: { type: DataTypes.BOOLEAN, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        emailVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
        verificationToken: { type: DataTypes.STRING },
    },
    {
        sequelize,
        modelName: "AppUser",
        tableName: "AppUser_TB",
    }
);
