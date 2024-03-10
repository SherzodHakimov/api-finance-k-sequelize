import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_currency_value, dbm_currency_valueId } from './dbm_currency_value';
import type { dbm_expense, dbm_expenseId } from './dbm_expense';
import type { dbm_operation, dbm_operationId } from './dbm_operation';
import type { list_account, list_accountId } from './list_account';
import type { set_currency_type, set_currency_typeId } from './set_currency_type';

export interface list_currencyAttributes {
  id: number;
  name: string;
  currency_type_id: number;
}

export type list_currencyPk = "id";
export type list_currencyId = list_currency[list_currencyPk];
export type list_currencyCreationAttributes = list_currencyAttributes;

export class list_currency extends Model<list_currencyAttributes, list_currencyCreationAttributes> implements list_currencyAttributes {
  id!: number;
  name!: string;
  currency_type_id!: number;

  // list_currency hasMany dbm_currency_value via currency_id
  dbm_currency_values!: dbm_currency_value[];
  getDbm_currency_values!: Sequelize.HasManyGetAssociationsMixin<dbm_currency_value>;
  setDbm_currency_values!: Sequelize.HasManySetAssociationsMixin<dbm_currency_value, dbm_currency_valueId>;
  addDbm_currency_value!: Sequelize.HasManyAddAssociationMixin<dbm_currency_value, dbm_currency_valueId>;
  addDbm_currency_values!: Sequelize.HasManyAddAssociationsMixin<dbm_currency_value, dbm_currency_valueId>;
  createDbm_currency_value!: Sequelize.HasManyCreateAssociationMixin<dbm_currency_value>;
  removeDbm_currency_value!: Sequelize.HasManyRemoveAssociationMixin<dbm_currency_value, dbm_currency_valueId>;
  removeDbm_currency_values!: Sequelize.HasManyRemoveAssociationsMixin<dbm_currency_value, dbm_currency_valueId>;
  hasDbm_currency_value!: Sequelize.HasManyHasAssociationMixin<dbm_currency_value, dbm_currency_valueId>;
  hasDbm_currency_values!: Sequelize.HasManyHasAssociationsMixin<dbm_currency_value, dbm_currency_valueId>;
  countDbm_currency_values!: Sequelize.HasManyCountAssociationsMixin;
  // list_currency hasMany dbm_expense via currency_id
  dbm_expenses!: dbm_expense[];
  getDbm_expenses!: Sequelize.HasManyGetAssociationsMixin<dbm_expense>;
  setDbm_expenses!: Sequelize.HasManySetAssociationsMixin<dbm_expense, dbm_expenseId>;
  addDbm_expense!: Sequelize.HasManyAddAssociationMixin<dbm_expense, dbm_expenseId>;
  addDbm_expenses!: Sequelize.HasManyAddAssociationsMixin<dbm_expense, dbm_expenseId>;
  createDbm_expense!: Sequelize.HasManyCreateAssociationMixin<dbm_expense>;
  removeDbm_expense!: Sequelize.HasManyRemoveAssociationMixin<dbm_expense, dbm_expenseId>;
  removeDbm_expenses!: Sequelize.HasManyRemoveAssociationsMixin<dbm_expense, dbm_expenseId>;
  hasDbm_expense!: Sequelize.HasManyHasAssociationMixin<dbm_expense, dbm_expenseId>;
  hasDbm_expenses!: Sequelize.HasManyHasAssociationsMixin<dbm_expense, dbm_expenseId>;
  countDbm_expenses!: Sequelize.HasManyCountAssociationsMixin;
  // list_currency hasMany dbm_operation via currency_id
  dbm_operations!: dbm_operation[];
  getDbm_operations!: Sequelize.HasManyGetAssociationsMixin<dbm_operation>;
  setDbm_operations!: Sequelize.HasManySetAssociationsMixin<dbm_operation, dbm_operationId>;
  addDbm_operation!: Sequelize.HasManyAddAssociationMixin<dbm_operation, dbm_operationId>;
  addDbm_operations!: Sequelize.HasManyAddAssociationsMixin<dbm_operation, dbm_operationId>;
  createDbm_operation!: Sequelize.HasManyCreateAssociationMixin<dbm_operation>;
  removeDbm_operation!: Sequelize.HasManyRemoveAssociationMixin<dbm_operation, dbm_operationId>;
  removeDbm_operations!: Sequelize.HasManyRemoveAssociationsMixin<dbm_operation, dbm_operationId>;
  hasDbm_operation!: Sequelize.HasManyHasAssociationMixin<dbm_operation, dbm_operationId>;
  hasDbm_operations!: Sequelize.HasManyHasAssociationsMixin<dbm_operation, dbm_operationId>;
  countDbm_operations!: Sequelize.HasManyCountAssociationsMixin;
  // list_currency hasMany list_account via currency_id
  list_accounts!: list_account[];
  getList_accounts!: Sequelize.HasManyGetAssociationsMixin<list_account>;
  setList_accounts!: Sequelize.HasManySetAssociationsMixin<list_account, list_accountId>;
  addList_account!: Sequelize.HasManyAddAssociationMixin<list_account, list_accountId>;
  addList_accounts!: Sequelize.HasManyAddAssociationsMixin<list_account, list_accountId>;
  createList_account!: Sequelize.HasManyCreateAssociationMixin<list_account>;
  removeList_account!: Sequelize.HasManyRemoveAssociationMixin<list_account, list_accountId>;
  removeList_accounts!: Sequelize.HasManyRemoveAssociationsMixin<list_account, list_accountId>;
  hasList_account!: Sequelize.HasManyHasAssociationMixin<list_account, list_accountId>;
  hasList_accounts!: Sequelize.HasManyHasAssociationsMixin<list_account, list_accountId>;
  countList_accounts!: Sequelize.HasManyCountAssociationsMixin;
  // list_currency belongsTo set_currency_type via currency_type_id
  currency_type!: set_currency_type;
  getCurrency_type!: Sequelize.BelongsToGetAssociationMixin<set_currency_type>;
  setCurrency_type!: Sequelize.BelongsToSetAssociationMixin<set_currency_type, set_currency_typeId>;
  createCurrency_type!: Sequelize.BelongsToCreateAssociationMixin<set_currency_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof list_currency {
    return list_currency.init({
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
    },
    currency_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'set_currency_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'list_currency',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "list_currency_id_currency_type_id_idx",
        fields: [
          { name: "id" },
          { name: "currency_type_id" },
        ]
      },
      {
        name: "list_currency_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
