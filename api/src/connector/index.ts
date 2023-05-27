import { Sequelize } from 'sequelize';
import 'dotenv/config.js';

console.log(process.env.DB_PASSWORD);

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
);
