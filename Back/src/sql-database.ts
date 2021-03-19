import { Sequelize } from "sequelize";

export const sqlDatabase = new Sequelize({
  database: "hot",
  username: "hot",
  password: "hot",
  dialect: "mariadb",
  host: 'mariadb'
});