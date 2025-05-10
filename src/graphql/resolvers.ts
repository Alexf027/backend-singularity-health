import {
    AppUser,
    UserDocument,
    ContactInfo,
} from "../models";
import { hashPassword } from "../utils/hash";
import { RegisterInput } from "./types/registerInput";

export const resolvers = {
    Mutation: {
        registerUser: async (_: unknown, { data }: { data: RegisterInput }) => {
            const {
                name,
                lastName,
                username,
                email,
                password,
                isMilitar,
                isTemporal,
                documentNumber,
                typeDocumentId,
                placeExpedition,
                dateExpedition,
                address,
                city,
                countryId,
                phone,
                celPhone,
                emergencyName,
                emergencyPhone,
            } = data;

            if (!name || !lastName || !username || !email || !password) {
                throw new Error("Missing required fields");
            }
            
            const existing = await AppUser.findOne({ where: { email } });
            if (existing) throw new Error("Email already registered");

            const existingDoc = await UserDocument.findOne({
                where: { Document: documentNumber },
            });
            if (existingDoc) throw new Error("Document already registered");

            const hashed = await hashPassword(password);

            const user = await AppUser.create({
                Name: name,
                LastName: lastName,
                username,
                email,
                password: hashed,
                IsMilitar: isMilitar,
                isTemporal,
                TimeCreate: new Date(),
            });

            if (!user) throw new Error("Error creating user");

            await UserDocument.create({
                UserID: user.id,
                Document: documentNumber,
                TypeDocumentID: typeDocumentId,
                PlaceExpedition: placeExpedition,
                DateExpedition: dateExpedition,
            });

            await ContactInfo.create({
                UserID: user.id,
                Address: address,
                City: city,
                CountryID: countryId,
                Phone: phone,
                CelPhone: celPhone,
                EmergencyName: emergencyName,
                EmergencyPhone: emergencyPhone,
            });

            return {
                id: user.id,
                name: user.Name,
                lastName: user.LastName,
                email: user.email,
            };
        },
    },
};
