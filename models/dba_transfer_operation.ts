import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_operation, dbm_operationId } from './dbm_operation';

export interface dba_transfer_operationAttributes {
  id: number;
  outcome_operation_id: number;
  income_operation_id: number;
}

export type dba_transfer_operationPk = "id";
export type dba_transfer_operationId = dba_transfer_operation[dba_transfer_operationPk];
export type dba_transfer_operationCreationAttributes = dba_transfer_operationAttributes;

export class dba_transfer_operation extends Model<dba_transfer_operationAttributes, dba_transfer_operationCreationAttributes> implements dba_transfer_operationAttributes {
  id!: number;
  outcome_operation_id!: number;
  income_operation_id!: number;

  // dba_transfer_operation belongsTo dbm_operation via income_operation_id
  income_operation!: dbm_operation;
  getIncome_operation!: Sequelize.BelongsToGetAssociationMixin<dbm_operation>;
  setIncome_operation!: Sequelize.BelongsToSetAssociationMixin<dbm_operation, dbm_operationId>;
  createIncome_operation!: Sequelize.BelongsToCreateAssociationMixin<dbm_operation>;
  // dba_transfer_operation belongsTo dbm_operation via outcome_operation_id
  outcome_operation!: dbm_operation;
  getOutcome_operation!: Sequelize.BelongsToGetAssociationMixin<dbm_operation>;
  setOutcome_operation!: Sequelize.BelongsToSetAssociationMixin<dbm_operation, dbm_operationId>;
  createOutcome_operation!: Sequelize.BelongsToCreateAssociationMixin<dbm_operation>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dba_transfer_operation {
    return dba_transfer_operation.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    outcome_operation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dbm_operation',
        key: 'id'
      }
    },
    income_operation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dbm_operation',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'dba_transfer_operation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dba_transfer_operation_id_outcome_operation_id_income_opera_idx",
        fields: [
          { name: "id" },
          { name: "outcome_operation_id" },
          { name: "income_operation_id" },
        ]
      },
      {
        name: "dba_transfer_operation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
