export interface RegisterInput {
    name: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    isMilitar: boolean;
    isTemporal: boolean;
    documentNumber: string;
    typeDocumentId: number;
    placeExpedition: string;
    address: string;
    city: string;
    countryId: number;
    dateExpedition: string | Date;
    phone: string;
    celPhone: string;
    emergencyName: string;
    emergencyPhone: string;
}
