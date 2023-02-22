import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, "./entities/*.{ts,js}")],
  migrations: [path.join(__dirname, "./migrations/*.{ts,js}")],
});

export { AppDataSource };
