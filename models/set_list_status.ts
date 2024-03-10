import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { list_account, list_accountId } from './list_account';
import type { list_expense, list_expenseId } from './list_expense';
import type { list_payer, list_payerId } from './list_payer';

export interface set_list_statusAttributes {
  id: number;
  name: string;
}

export type set_list_statusPk = "id";
export type set_list_statusId = set_list_status[set_list_statusPk];
export type set_list_statusCreationAttributes = set_list_statusAttributes;

export class set_list_status extends Model<set_list_statusAttributes, set_list_statusCreationAttributes> implements set_list_statusAttributes {
  id!: number;
  name!: string;

  // set_list_status hasMany list_account via status_id
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
  // set_list_status hasMany list_expense via status_id
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
  // set_list_status hasMany list_payer via status_id
  list_payers!: list_payer[];
  getList_payers!: Sequelize.HasManyGetAssociationsMixin<list_payer>;
  setList_payers!: Sequelize.HasManySetAssociationsMixin<list_payer, list_payerId>;
  addList_payer!: Sequelize.HasManyAddAssociationMixin<list_payer, list_payerId>;
  addList_payers!: Sequelize.HasManyAddAssociationsMixin<list_payer, list_payerId>;
  createList_payer!: Sequelize.HasManyCreateAssociationMixin<list_payer>;
  removeList_payer!: Sequelize.HasManyRemoveAssociationMixin<list_payer, list_payerId>;
  removeList_payers!: Sequelize.HasManyRemoveAssociationsMixin<list_payer, list_payerId>;
  hasList_payer!: Sequelize.HasManyHasAssociationMixin<list_payer, list_payerId>;
  hasList_payers!: Sequelize.HasManyHasAssociationsMixin<list_payer, list_payerId>;
  countList_payers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof set_list_status {
    return set_list_status.init({
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
    tableName: 'set_list_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_list_status_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_list_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
