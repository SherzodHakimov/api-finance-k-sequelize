import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_expense, dbm_expenseId } from './dbm_expense';

export interface set_payment_docAttributes {
  id: number;
  name: string;
}

export type set_payment_docPk = "id";
export type set_payment_docId = set_payment_doc[set_payment_docPk];
export type set_payment_docCreationAttributes = set_payment_docAttributes;

export class set_payment_doc extends Model<set_payment_docAttributes, set_payment_docCreationAttributes> implements set_payment_docAttributes {
  id!: number;
  name!: string;

  // set_payment_doc hasMany dbm_expense via payment_doc_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof set_payment_doc {
    return set_payment_doc.init({
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
    tableName: 'set_payment_doc',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_payment_doc_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_payment_doc_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
