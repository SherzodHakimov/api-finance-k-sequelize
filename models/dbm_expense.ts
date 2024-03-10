import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dba_expense_operation, dba_expense_operationId } from './dba_expense_operation';
import type { list_currency, list_currencyId } from './list_currency';
import type { list_expense, list_expenseId } from './list_expense';
import type { list_expense_group, list_expense_groupId } from './list_expense_group';
import type { list_measure, list_measureId } from './list_measure';
import type { set_account_type, set_account_typeId } from './set_account_type';
import type { set_operation_status, set_operation_statusId } from './set_operation_status';
import type { set_payment_doc, set_payment_docId } from './set_payment_doc';

export interface dbm_expenseAttributes {
  id: number;
  expense_group_id: number;
  expense_id: number;
  payment_doc_id: number;
  measure_id: number;
  account_type_id: number;
  currency_id: number;
  status_id: number;
  count: number;
  ammount: number;
  comment?: string;
  operation_date: string;
  created_at: Date;
}

export type dbm_expensePk = "id";
export type dbm_expenseId = dbm_expense[dbm_expensePk];
export type dbm_expenseOptionalAttributes = "comment" | "created_at";
export type dbm_expenseCreationAttributes = Optional<dbm_expenseAttributes, dbm_expenseOptionalAttributes>;

export class dbm_expense extends Model<dbm_expenseAttributes, dbm_expenseCreationAttributes> implements dbm_expenseAttributes {
  id!: number;
  expense_group_id!: number;
  expense_id!: number;
  payment_doc_id!: number;
  measure_id!: number;
  account_type_id!: number;
  currency_id!: number;
  status_id!: number;
  count!: number;
  ammount!: number;
  comment?: string;
  operation_date!: string;
  created_at!: Date;

  // dbm_expense hasMany dba_expense_operation via expense_operation_id
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
  // dbm_expense belongsTo list_currency via currency_id
  currency!: list_currency;
  getCurrency!: Sequelize.BelongsToGetAssociationMixin<list_currency>;
  setCurrency!: Sequelize.BelongsToSetAssociationMixin<list_currency, list_currencyId>;
  createCurrency!: Sequelize.BelongsToCreateAssociationMixin<list_currency>;
  // dbm_expense belongsTo list_expense via expense_id
  expense!: list_expense;
  getExpense!: Sequelize.BelongsToGetAssociationMixin<list_expense>;
  setExpense!: Sequelize.BelongsToSetAssociationMixin<list_expense, list_expenseId>;
  createExpense!: Sequelize.BelongsToCreateAssociationMixin<list_expense>;
  // dbm_expense belongsTo list_expense_group via expense_group_id
  expense_group!: list_expense_group;
  getExpense_group!: Sequelize.BelongsToGetAssociationMixin<list_expense_group>;
  setExpense_group!: Sequelize.BelongsToSetAssociationMixin<list_expense_group, list_expense_groupId>;
  createExpense_group!: Sequelize.BelongsToCreateAssociationMixin<list_expense_group>;
  // dbm_expense belongsTo list_measure via measure_id
  measure!: list_measure;
  getMeasure!: Sequelize.BelongsToGetAssociationMixin<list_measure>;
  setMeasure!: Sequelize.BelongsToSetAssociationMixin<list_measure, list_measureId>;
  createMeasure!: Sequelize.BelongsToCreateAssociationMixin<list_measure>;
  // dbm_expense belongsTo set_account_type via account_type_id
  account_type!: set_account_type;
  getAccount_type!: Sequelize.BelongsToGetAssociationMixin<set_account_type>;
  setAccount_type!: Sequelize.BelongsToSetAssociationMixin<set_account_type, set_account_typeId>;
  createAccount_type!: Sequelize.BelongsToCreateAssociationMixin<set_account_type>;
  // dbm_expense belongsTo set_operation_status via status_id
  status!: set_operation_status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<set_operation_status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<set_operation_status, set_operation_statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<set_operation_status>;
  // dbm_expense belongsTo set_payment_doc via payment_doc_id
  payment_doc!: set_payment_doc;
  getPayment_doc!: Sequelize.BelongsToGetAssociationMixin<set_payment_doc>;
  setPayment_doc!: Sequelize.BelongsToSetAssociationMixin<set_payment_doc, set_payment_docId>;
  createPayment_doc!: Sequelize.BelongsToCreateAssociationMixin<set_payment_doc>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dbm_expense {
    return dbm_expense.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      expense_group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'list_expense_group',
          key: 'id'
        }
      },
      expense_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'list_expense',
          key: 'id'
        }
      },
      payment_doc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'set_payment_doc',
          key: 'id'
        }
      },
      measure_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'list_measure',
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
      count: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      ammount: {
        type: DataTypes.DECIMAL,
        allowNull: false
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
    tableName: 'dbm_expense',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "dbm_expense_id_expense_group_id_expense_id_payment_doc_id_m_idx",
        fields: [
          { name: "id" },
          { name: "expense_group_id" },
          { name: "expense_id" },
          { name: "payment_doc_id" },
          { name: "measure_id" },
          { name: "account_type_id" },
          { name: "currency_id" },
          { name: "status_id" },
        ]
      },
      {
        name: "dbm_expense_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
