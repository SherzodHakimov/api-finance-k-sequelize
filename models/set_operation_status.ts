import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_expense, dbm_expenseId } from './dbm_expense';
import type { dbm_operation, dbm_operationId } from './dbm_operation';

export interface set_operation_statusAttributes {
  id: number;
  name: string;
}

export type set_operation_statusPk = "id";
export type set_operation_statusId = set_operation_status[set_operation_statusPk];
export type set_operation_statusCreationAttributes = set_operation_statusAttributes;

export class set_operation_status extends Model<set_operation_statusAttributes, set_operation_statusCreationAttributes> implements set_operation_statusAttributes {
  id!: number;
  name!: string;

  // set_operation_status hasMany dbm_expense via status_id
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
  // set_operation_status hasMany dbm_operation via status_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof set_operation_status {
    return set_operation_status.init({
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
    tableName: 'set_operation_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_operation_status_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_operation_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
