import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { list_currency, list_currencyId } from './list_currency';

export interface set_currency_typeAttributes {
  id: number;
  name: string;
}

export type set_currency_typePk = "id";
export type set_currency_typeId = set_currency_type[set_currency_typePk];
export type set_currency_typeCreationAttributes = set_currency_typeAttributes;

export class set_currency_type extends Model<set_currency_typeAttributes, set_currency_typeCreationAttributes> implements set_currency_typeAttributes {
  id!: number;
  name!: string;

  // set_currency_type hasMany list_currency via currency_type_id
  list_currencies!: list_currency[];
  getList_currencies!: Sequelize.HasManyGetAssociationsMixin<list_currency>;
  setList_currencies!: Sequelize.HasManySetAssociationsMixin<list_currency, list_currencyId>;
  addList_currency!: Sequelize.HasManyAddAssociationMixin<list_currency, list_currencyId>;
  addList_currencies!: Sequelize.HasManyAddAssociationsMixin<list_currency, list_currencyId>;
  createList_currency!: Sequelize.HasManyCreateAssociationMixin<list_currency>;
  removeList_currency!: Sequelize.HasManyRemoveAssociationMixin<list_currency, list_currencyId>;
  removeList_currencies!: Sequelize.HasManyRemoveAssociationsMixin<list_currency, list_currencyId>;
  hasList_currency!: Sequelize.HasManyHasAssociationMixin<list_currency, list_currencyId>;
  hasList_currencies!: Sequelize.HasManyHasAssociationsMixin<list_currency, list_currencyId>;
  countList_currencies!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof set_currency_type {
    return set_currency_type.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'set_currency_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_currency_type_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_currency_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
