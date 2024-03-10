import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { list_currency, list_currencyId } from './list_currency';

export interface dbm_currency_valueAttributes {
  id: number;
  currency_id: number;
  buy_value: number;
  sell_value: number;
  value_date: string;
  created_at: Date;
}

export type dbm_currency_valuePk = "id";
export type dbm_currency_valueId = dbm_currency_value[dbm_currency_valuePk];
export type dbm_currency_valueOptionalAttributes = "created_at";
export type dbm_currency_valueCreationAttributes = Optional<dbm_currency_valueAttributes, dbm_currency_valueOptionalAttributes>;

export class dbm_currency_value extends Model<dbm_currency_valueAttributes, dbm_currency_valueCreationAttributes> implements dbm_currency_valueAttributes {
  id!: number;
  currency_id!: number;
  buy_value!: number;
  sell_value!: number;
  value_date!: string;
  created_at!: Date;

  // dbm_currency_value belongsTo list_currency via currency_id
  currency!: list_currency;
  getCurrency!: Sequelize.BelongsToGetAssociationMixin<list_currency>;
  setCurrency!: Sequelize.BelongsToSetAssociationMixin<list_currency, list_currencyId>;
  createCurrency!: Sequelize.BelongsToCreateAssociationMixin<list_currency>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dbm_currency_value {
    return dbm_currency_value.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      currency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'list_currency',
          key: 'id'
        }
      },
      buy_value: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      sell_value: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      value_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      created_at: ''
    }, {
    sequelize,
    tableName: 'dbm_currency_value',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "dbm_currency_value_id_currency_id_idx",
        fields: [
          { name: "id" },
          { name: "currency_id" },
        ]
      },
      {
        name: "dbm_currency_value_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
