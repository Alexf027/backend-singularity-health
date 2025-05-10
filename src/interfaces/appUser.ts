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