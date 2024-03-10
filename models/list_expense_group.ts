import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_expense, dbm_expenseId } from './dbm_expense';
import type { list_expense, list_expenseId } from './list_expense';

export interface list_expense_groupAttributes {
  id: number;
  name: string;
}

export type list_expense_groupPk = "id";
export type list_expense_groupId = list_expense_group[list_expense_groupPk];
export type list_expense_groupCreationAttributes = list_expense_groupAttributes;

export class list_expense_group extends Model<list_expense_groupAttributes, list_expense_groupCreationAttributes> implements list_expense_groupAttributes {
  id!: number;
  name!: string;

  // list_expense_group hasMany dbm_expense via expense_group_id
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
  // list_expense_group hasMany list_expense via expense_group_id
  list_expenses!: list_expense[];
  getList_expenses!: Sequelize.HasManyGetAssociationsMixin<list_expense>;
  setList_expenses!: Sequelize.HasManySetAssociationsMixin<list_expense, list_expenseId>;
  addList_expense!: Sequelize.HasManyAddAssociationMixin<list_expense, list_expenseId>;
  addList_expenses!: Sequelize.HasManyAddAssociationsMixin<list_expense, list_expenseId>;
  createList_expense!: Sequelize.HasManyCreateAssociationMixin<list_expense>;
  removeList_expense!: Sequelize.HasManyRemoveAssociationMixin<list_expense, list_expenseId>;
  removeList_expenses!: Sequelize.HasManyRemoveAssociationsMixin<list_expense, list_expenseId>;
  hasList_expense!: Sequelize.HasManyHasAssociationMixin<list_expense, list_expenseId>;
  hasList_expenses!: Sequelize.HasManyHasAssociationsMixin<list_expense, list_expenseId>;
  countList_expenses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof list_expense_group {
    return list_expense_group.init({
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
    tableName: 'list_expense_group',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "list_expense_group_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "list_expense_group_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
