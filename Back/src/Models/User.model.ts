import { Model, DataTypes } from "sequelize";
import { sqlDatabase } from "../sql-database";

export interface UserInterface {
    name: string;
  }

export class User extends Model {
  public id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public name!: string;

}

User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },   
    },
    {
      tableName: "Users",
      sequelize: sqlDatabase,
    }
  );
  
User.sync().then(() => console.log("User table created"));