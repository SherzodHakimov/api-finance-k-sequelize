import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_operation, dbm_operationId } from './dbm_operation';

export interface set_operationAttributes {
  id: number;
  name: string;
  bank: boolean;
  cash: boolean;
}

export type set_operationPk = "id";
export type set_operationId = set_operation[set_operationPk];
export type set_operationOptionalAttributes = "bank" | "cash";
export type set_operationCreationAttributes = Optional<set_operationAttributes, set_operationOptionalAttributes>;

export class set_operation extends Model<set_operationAttributes, set_operationCreationAttributes> implements set_operationAttributes {
  id!: number;
  name!: string;
  bank!: boolean;
  cash!: boolean;

  // set_operation hasMany dbm_operation via operation_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof set_operation {
    return set_operation.init({
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
    bank: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    cash: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'set_operation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_operation_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_operation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
