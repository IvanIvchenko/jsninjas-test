import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../connector/index.js';

class Superhero extends Model {
  public id!: number;
  public nickname!: string;
  public real_name!: string;
  public origin_description!: string;
  public superpowers!: string;
  public catch_phrase!: string;
  public images!: string[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Superhero.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    real_name: {
      type: DataTypes.STRING,
    },
    origin_description: {
      type: DataTypes.STRING,
    },
    superpowers: {
      type: DataTypes.STRING,
    },
    catch_phrase: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    sequelize,
    modelName: 'superhero',
  },
);

export { Superhero };
