import dotenv from 'dotenv';

dotenv.config();

export const PORT=process.env.PORT || 3000;
export const Mongo_DB_URL=process.env.Mongo_DB_URL;