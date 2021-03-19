import { Model, DataTypes } from "sequelize";
import { sqlDatabase } from "../sql-database";

export interface BreadInterface {
  defaultCookingTime: number;
  userId: string;
  breadType: string;
  cookingTime: number
}

export class Bread extends Model {
  public id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public defaultCookingTime!: number;
  public userId!: string;
  public breadType!: string
  public cookingTime!: number
}

Bread.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: new DataTypes.STRING(128),
      },
      breadType: {
        type: new DataTypes.STRING(128),
      },
      defaultCookingTime: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      cookingTime: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
    },
    {
      tableName: "Breads",
      sequelize: sqlDatabase,
    }
  );

Bread.sync().then(() => console.log("Bread table created"));
