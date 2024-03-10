import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_expense, dbm_expenseId } from './dbm_expense';
import type { dbm_operation, dbm_operationId } from './dbm_operation';

export interface dba_expense_operationAttributes {
  id: number;
  expense_operation_id: number;
  outcome_operation_id: number;
}

export type dba_expense_operationPk = "id";
export type dba_expense_operationId = dba_expense_operation[dba_expense_operationPk];
export type dba_expense_operationCreationAttributes = dba_expense_operationAttributes;

export class dba_expense_operation extends Model<dba_expense_operationAttributes, dba_expense_operationCreationAttributes> implements dba_expense_operationAttributes {
  id!: number;
  expense_operation_id!: number;
  outcome_operation_id!: number;

  // dba_expense_operation belongsTo dbm_expense via expense_operation_id
  expense_operation!: dbm_expense;
  getExpense_operation!: Sequelize.BelongsToGetAssociationMixin<dbm_expense>;
  setExpense_operation!: Sequelize.BelongsToSetAssociationMixin<dbm_expense, dbm_expenseId>;
  createExpense_operation!: Sequelize.BelongsToCreateAssociationMixin<dbm_expense>;
  // dba_expense_operation belongsTo dbm_operation via outcome_operation_id
  outcome_operation!: dbm_operation;
  getOutcome_operation!: Sequelize.BelongsToGetAssociationMixin<dbm_operation>;
  setOutcome_operation!: Sequelize.BelongsToSetAssociationMixin<dbm_operation, dbm_operationId>;
  createOutcome_operation!: Sequelize.BelongsToCreateAssociationMixin<dbm_operation>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dba_expense_operation {
    return dba_expense_operation.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    expense_operation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dbm_expense',
        key: 'id'
      }
    },
    outcome_operation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dbm_operation',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'dba_expense_operation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dba_expense_operation_id_expense_operation_id_outcome_opera_idx",
        fields: [
          { name: "id" },
          { name: "expense_operation_id" },
          { name: "outcome_operation_id" },
        ]
      },
      {
        name: "dba_expense_operation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
