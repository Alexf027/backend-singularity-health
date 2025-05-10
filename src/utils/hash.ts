import bcrypt from 'bcryptjs';
export const hashPassword = async (plain: string) => bcrypt.hash(plain, 10);
