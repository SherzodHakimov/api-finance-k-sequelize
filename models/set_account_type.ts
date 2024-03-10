import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_expense, dbm_expenseId } from './dbm_expense';
import type { dbm_operation, dbm_operationId } from './dbm_operation';

export interface set_account_typeAttributes {
  id: number;
  name: string;
}

export type set_account_typePk = "id";
export type set_account_typeId = set_account_type[set_account_typePk];
export type set_account_typeCreationAttributes = set_account_typeAttributes;

export class set_account_type extends Model<set_account_typeAttributes, set_account_typeCreationAttributes> implements set_account_typeAttributes {
  id!: number;
  name!: string;

  // set_account_type hasMany dbm_expense via account_type_id
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
  // set_account_type hasMany dbm_operation via account_type_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof set_account_type {
    return set_account_type.init({
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
    tableName: 'set_account_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_account_type_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_account_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
