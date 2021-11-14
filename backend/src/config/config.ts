import dotenv from "dotenv";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

const DB: string = process.env.MONGO_URL as string;

const JWT_SEC: string = process.env.JWT_SEC as string;

const JWT_VERIFY_SEC: string = process.env.JWT_VERIFY_SEC as string;

const PASS_SEC: string = process.env.PASS_SEC as string;

const config = {
  PORT: PORT,
  DB: DB,
  JWT_SEC: JWT_SEC,
  JWT_VERIFY_SEC: JWT_VERIFY_SEC,
  PASS_SEC: PASS_SEC,
};

export default config;
