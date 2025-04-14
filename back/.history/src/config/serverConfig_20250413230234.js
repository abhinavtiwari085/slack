import dotenv from 'dotenv';

dotenv.config();

export const PORT=process.env.PORT || 3000;
export const Mongo_DB_URL=process.env.Mongo_DB_URL;
export const JWT_SECRET=process.env.JWT_SECRET;
export const JWT_EXPIRY=process.env.JWT_EXPIRY;

export const MAIL_ID = process.env.MAIL_ID;

export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

export const REDIS_PORT = process.env.REDIS_PORT || 6379;

export const REDIS_HOST = process.env.REDIS_HOST || 'localhost';

export const APP_LINK=process.env.APP_LINK;