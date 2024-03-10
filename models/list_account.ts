import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_operation, dbm_operationId } from './dbm_operation';
import type { list_bank, list_bankId } from './list_bank';
import type { list_currency, list_currencyId } from './list_currency';
import type { set_list_status, set_list_statusId } from './set_list_status';

export interface list_accountAttributes {
  id: number;
  name: string;
  currency_id: number;
  bank_id: number;
  status_id: number;
}

export type list_accountPk = "id";
export type list_accountId = list_account[list_accountPk];
export type list_accountCreationAttributes = list_accountAttributes;

export class list_account extends Model<list_accountAttributes, list_accountCreationAttributes> implements list_accountAttributes {
  id!: number;
  name!: string;
  currency_id!: number;
  bank_id!: number;
  status_id!: number;

  // list_account hasMany dbm_operation via account_id
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
  // list_account belongsTo list_bank via bank_id
  bank!: list_bank;
  getBank!: Sequelize.BelongsToGetAssociationMixin<list_bank>;
  setBank!: Sequelize.BelongsToSetAssociationMixin<list_bank, list_bankId>;
  createBank!: Sequelize.BelongsToCreateAssociationMixin<list_bank>;
  // list_account belongsTo list_currency via currency_id
  currency!: list_currency;
  getCurrency!: Sequelize.BelongsToGetAssociationMixin<list_currency>;
  setCurrency!: Sequelize.BelongsToSetAssociationMixin<list_currency, list_currencyId>;
  createCurrency!: Sequelize.BelongsToCreateAssociationMixin<list_currency>;
  // list_account belongsTo set_list_status via status_id
  status!: set_list_status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<set_list_status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<set_list_status, set_list_statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<set_list_status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof list_account {
    return list_account.init({
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
    currency_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'list_currency',
        key: 'id'
      }
    },
    bank_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'list_bank',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'set_list_status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'list_account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "list_account_id_currency_id_bank_id_status_id_idx",
        fields: [
          { name: "id" },
          { name: "currency_id" },
          { name: "bank_id" },
          { name: "status_id" },
        ]
      },
      {
        name: "list_account_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
