import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dbm_user, dbm_userId } from './dbm_user';

export interface set_user_statusAttributes {
  id: number;
  name: string;
}

export type set_user_statusPk = "id";
export type set_user_statusId = set_user_status[set_user_statusPk];
export type set_user_statusCreationAttributes = set_user_statusAttributes;

export class set_user_status extends Model<set_user_statusAttributes, set_user_statusCreationAttributes> implements set_user_statusAttributes {
  id!: number;
  name!: string;

  // set_user_status hasMany dbm_user via status_id
  dbm_users!: dbm_user[];
  getDbm_users!: Sequelize.HasManyGetAssociationsMixin<dbm_user>;
  setDbm_users!: Sequelize.HasManySetAssociationsMixin<dbm_user, dbm_userId>;
  addDbm_user!: Sequelize.HasManyAddAssociationMixin<dbm_user, dbm_userId>;
  addDbm_users!: Sequelize.HasManyAddAssociationsMixin<dbm_user, dbm_userId>;
  createDbm_user!: Sequelize.HasManyCreateAssociationMixin<dbm_user>;
  removeDbm_user!: Sequelize.HasManyRemoveAssociationMixin<dbm_user, dbm_userId>;
  removeDbm_users!: Sequelize.HasManyRemoveAssociationsMixin<dbm_user, dbm_userId>;
  hasDbm_user!: Sequelize.HasManyHasAssociationMixin<dbm_user, dbm_userId>;
  hasDbm_users!: Sequelize.HasManyHasAssociationsMixin<dbm_user, dbm_userId>;
  countDbm_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof set_user_status {
    return set_user_status.init({
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
    tableName: 'set_user_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_user_status_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_user_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
