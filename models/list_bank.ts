import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { list_account, list_accountId } from './list_account';
import { Table } from 'sequelize-typescript';

export interface list_bankAttributes {
  id: number;
  name: string;
}

export type list_bankPk = "id";
export type list_bankId = list_bank[list_bankPk];
export type list_bankCreationAttributes = list_bankAttributes;

@Table({tableName: 'list_bank'})
export class list_bank extends Model<list_bankAttributes, list_bankCreationAttributes> implements list_bankAttributes {
  id!: number;
  name!: string;

  // list_bank hasMany list_account via bank_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof list_bank {
    return list_bank.init({
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
    tableName: 'list_bank',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "list_bank_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "list_bank_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
