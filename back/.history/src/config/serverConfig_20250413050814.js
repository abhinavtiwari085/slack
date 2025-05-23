import dotenv from 'dotenv';

dotenv.config();

export const PORT=process.env.PORT || 3000;
export const Mongo_DB_URL=process.env.Mongo_DB_URL;
export const JWT_SECRET=process.env.JWT_SECRET;
export const JWT_EXPIRY=process.env.JWT_EXPIRY;

export const MAIL_ID = process.env.MAIL_ID;

export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

