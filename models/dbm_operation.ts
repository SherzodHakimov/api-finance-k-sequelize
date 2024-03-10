import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dba_expense_operation, dba_expense_operationId } from './dba_expense_operation';
import type { dba_transfer_operation, dba_transfer_operationId } from './dba_transfer_operation';
import type { list_account, list_accountId } from './list_account';
import type { list_currency, list_currencyId } from './list_currency';
import type { set_account_type, set_account_typeId } from './set_account_type';
import type { set_operation, set_operationId } from './set_operation';
import type { set_operation_status, set_operation_statusId } from './set_operation_status';

export interface dbm_operationAttributes {
  id: number;
  operation_id: number;
  account_id: number;
  account_type_id: number;
  currency_id: number;
  status_id: number;
  ammount_in?: number;
  ammount_out?: number;
  comment?: string;
  operation_date: string;
  created_at: Date;
}

export type dbm_operationPk = "id";
export type dbm_operationId = dbm_operation[dbm_operationPk];
export type dbm_operationOptionalAttributes = "ammount_in" | "ammount_out" | "comment" | "created_at";
export type dbm_operationCreationAttributes = Optional<dbm_operationAttributes, dbm_operationOptionalAttributes>;

export class dbm_operation extends Model<dbm_operationAttributes, dbm_operationCreationAttributes> implements dbm_operationAttributes {
  id!: number;
  operation_id!: number;
  account_id!: number;
  account_type_id!: number;
  currency_id!: number;
  status_id!: number;
  ammount_in?: number;
  ammount_out?: number;
  comment?: string;
  operation_date!: string;
  created_at!: Date;

  // dbm_operation hasMany dba_expense_operation via outcome_operation_id
  dba_expense_operations!: dba_expense_operation[];
  getDba_expense_operations!: Sequelize.HasManyGetAssociationsMixin<dba_expense_operation>;
  setDba_expense_operations!: Sequelize.HasManySetAssociationsMixin<dba_expense_operation, dba_expense_operationId>;
  addDba_expense_operation!: Sequelize.HasManyAddAssociationMixin<dba_expense_operation, dba_expense_operationId>;
  addDba_expense_operations!: Sequelize.HasManyAddAssociationsMixin<dba_expense_operation, dba_expense_operationId>;
  createDba_expense_operation!: Sequelize.HasManyCreateAssociationMixin<dba_expense_operation>;
  removeDba_expense_operation!: Sequelize.HasManyRemoveAssociationMixin<dba_expense_operation, dba_expense_operationId>;
  removeDba_expense_operations!: Sequelize.HasManyRemoveAssociationsMixin<dba_expense_operation, dba_expense_operationId>;
  hasDba_expense_operation!: Sequelize.HasManyHasAssociationMixin<dba_expense_operation, dba_expense_operationId>;
  hasDba_expense_operations!: Sequelize.HasManyHasAssociationsMixin<dba_expense_operation, dba_expense_operationId>;
  countDba_expense_operations!: Sequelize.HasManyCountAssociationsMixin;
  // dbm_operation hasMany dba_transfer_operation via income_operation_id
  dba_transfer_operations!: dba_transfer_operation[];
  getDba_transfer_operations!: Sequelize.HasManyGetAssociationsMixin<dba_transfer_operation>;
  setDba_transfer_operations!: Sequelize.HasManySetAssociationsMixin<dba_transfer_operation, dba_transfer_operationId>;
  addDba_transfer_operation!: Sequelize.HasManyAddAssociationMixin<dba_transfer_operation, dba_transfer_operationId>;
  addDba_transfer_operations!: Sequelize.HasManyAddAssociationsMixin<dba_transfer_operation, dba_transfer_operationId>;
  createDba_transfer_operation!: Sequelize.HasManyCreateAssociationMixin<dba_transfer_operation>;
  removeDba_transfer_operation!: Sequelize.HasManyRemoveAssociationMixin<dba_transfer_operation, dba_transfer_operationId>;
  removeDba_transfer_operations!: Sequelize.HasManyRemoveAssociationsMixin<dba_transfer_operation, dba_transfer_operationId>;
  hasDba_transfer_operation!: Sequelize.HasManyHasAssociationMixin<dba_transfer_operation, dba_transfer_operationId>;
  hasDba_transfer_operations!: Sequelize.HasManyHasAssociationsMixin<dba_transfer_operation, dba_transfer_operationId>;
  countDba_transfer_operations!: Sequelize.HasManyCountAssociationsMixin;
  // dbm_operation hasMany dba_transfer_operation via outcome_operation_id
  outcome_operation_dba_transfer_operations!: dba_transfer_operation[];
  getOutcome_operation_dba_transfer_operations!: Sequelize.HasManyGetAssociationsMixin<dba_transfer_operation>;
  setOutcome_operation_dba_transfer_operations!: Sequelize.HasManySetAssociationsMixin<dba_transfer_operation, dba_transfer_operationId>;
  addOutcome_operation_dba_transfer_operation!: Sequelize.HasManyAddAssociationMixin<dba_transfer_operation, dba_transfer_operationId>;
  addOutcome_operation_dba_transfer_operations!: Sequelize.HasManyAddAssociationsMixin<dba_transfer_operation, dba_transfer_operationId>;
  createOutcome_operation_dba_transfer_operation!: Sequelize.HasManyCreateAssociationMixin<dba_transfer_operation>;
  removeOutcome_operation_dba_transfer_operation!: Sequelize.HasManyRemoveAssociationMixin<dba_transfer_operation, dba_transfer_operationId>;
  removeOutcome_operation_dba_transfer_operations!: Sequelize.HasManyRemoveAssociationsMixin<dba_transfer_operation, dba_transfer_operationId>;
  hasOutcome_operation_dba_transfer_operation!: Sequelize.HasManyHasAssociationMixin<dba_transfer_operation, dba_transfer_operationId>;
  hasOutcome_operation_dba_transfer_operations!: Sequelize.HasManyHasAssociationsMixin<dba_transfer_operation, dba_transfer_operationId>;
  countOutcome_operation_dba_transfer_operations!: Sequelize.HasManyCountAssociationsMixin;
  // dbm_operation belongsTo list_account via account_id
  account!: list_account;
  getAccount!: Sequelize.BelongsToGetAssociationMixin<list_account>;
  setAccount!: Sequelize.BelongsToSetAssociationMixin<list_account, list_accountId>;
  createAccount!: Sequelize.BelongsToCreateAssociationMixin<list_account>;
  // dbm_operation belongsTo list_currency via currency_id
  currency!: list_currency;
  getCurrency!: Sequelize.BelongsToGetAssociationMixin<list_currency>;
  setCurrency!: Sequelize.BelongsToSetAssociationMixin<list_currency, list_currencyId>;
  createCurrency!: Sequelize.BelongsToCreateAssociationMixin<list_currency>;
  // dbm_operation belongsTo set_account_type via account_type_id
  account_type!: set_account_type;
  getAccount_type!: Sequelize.BelongsToGetAssociationMixin<set_account_type>;
  setAccount_type!: Sequelize.BelongsToSetAssociationMixin<set_account_type, set_account_typeId>;
  createAccount_type!: Sequelize.BelongsToCreateAssociationMixin<set_account_type>;
  // dbm_operation belongsTo set_operation via operation_id
  operation!: set_operation;
  getOperation!: Sequelize.BelongsToGetAssociationMixin<set_operation>;
  setOperation!: Sequelize.BelongsToSetAssociationMixin<set_operation, set_operationId>;
  createOperation!: Sequelize.BelongsToCreateAssociationMixin<set_operation>;
  // dbm_operation belongsTo set_operation_status via status_id
  status!: set_operation_status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<set_operation_status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<set_operation_status, set_operation_statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<set_operation_status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dbm_operation {
    return dbm_operation.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      operation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'set_operation',
          key: 'id'
        }
      },
      account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'list_account',
          key: 'id'
        }
      },
      account_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'set_account_type',
          key: 'id'
        }
      },
      currency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'list_currency',
          key: 'id'
        }
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'set_operation_status',
          key: 'id'
        }
      },
      ammount_in: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      ammount_out: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      operation_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      created_at: ''
    }, {
    sequelize,
    tableName: 'dbm_operation',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "dbm_operation_id_operation_id_account_type_id_currency_id_s_idx",
        fields: [
          { name: "id" },
          { name: "operation_id" },
          { name: "account_type_id" },
          { name: "currency_id" },
          { name: "status_id" },
        ]
      },
      {
        name: "dbm_operation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
