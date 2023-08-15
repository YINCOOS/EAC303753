import dotenv from 'dotenv';
dotenv.config();
export const APP_SECRET = process.env.APP_SECRET as string;
export const URL = process.env.URL as string;
export const port = process.env.PORT || 4000;