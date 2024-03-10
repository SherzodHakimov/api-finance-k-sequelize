import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_expense, dbm_expenseId } from './dbm_expense';
import type { list_expense_group, list_expense_groupId } from './list_expense_group';
import type { set_list_status, set_list_statusId } from './set_list_status';

export interface list_expenseAttributes {
  id: number;
  name: string;
  expense_group_id: number;
  status_id: number;
}

export type list_expensePk = "id";
export type list_expenseId = list_expense[list_expensePk];
export type list_expenseCreationAttributes = list_expenseAttributes;

export class list_expense extends Model<list_expenseAttributes, list_expenseCreationAttributes> implements list_expenseAttributes {
  id!: number;
  name!: string;
  expense_group_id!: number;
  status_id!: number;

  // list_expense hasMany dbm_expense via expense_id
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
  // list_expense belongsTo list_expense_group via expense_group_id
  expense_group!: list_expense_group;
  getExpense_group!: Sequelize.BelongsToGetAssociationMixin<list_expense_group>;
  setExpense_group!: Sequelize.BelongsToSetAssociationMixin<list_expense_group, list_expense_groupId>;
  createExpense_group!: Sequelize.BelongsToCreateAssociationMixin<list_expense_group>;
  // list_expense belongsTo set_list_status via status_id
  status!: set_list_status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<set_list_status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<set_list_status, set_list_statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<set_list_status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof list_expense {
    return list_expense.init({
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
    expense_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'list_expense_group',
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
    tableName: 'list_expense',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "list_expense_id_expense_group_id_status_id_idx",
        fields: [
          { name: "id" },
          { name: "expense_group_id" },
          { name: "status_id" },
        ]
      },
      {
        name: "list_expense_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
