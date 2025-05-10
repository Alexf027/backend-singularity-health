import { AppUser } from "./appUser";
import { UserDocument } from "./userDocument";
import { TypeDocument } from "./typeDocument";
import { ContactInfo } from "./contactInfo";
import { Country } from "./country";

AppUser.hasOne(UserDocument, { foreignKey: "UserID" });
UserDocument.belongsTo(AppUser, { foreignKey: "UserID" });

TypeDocument.hasMany(UserDocument, { foreignKey: "TypeDocumentID" });
UserDocument.belongsTo(TypeDocument, { foreignKey: "TypeDocumentID" });

AppUser.hasOne(ContactInfo, { foreignKey: "UserID" });
ContactInfo.belongsTo(AppUser, { foreignKey: "UserID" });

Country.hasMany(ContactInfo, { foreignKey: "CountryID" });
ContactInfo.belongsTo(Country, { foreignKey: "CountryID" });

export {
  AppUser,
  UserDocument,
  TypeDocument,
  ContactInfo,
  Country
};
