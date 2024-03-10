import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dba_user_roles, dba_user_rolesId } from './dba_user_roles';
import type { dbm_user, dbm_userId } from './dbm_user';

export interface set_user_roleAttributes {
  id: number;
  name: string;
}

export type set_user_rolePk = "id";
export type set_user_roleId = set_user_role[set_user_rolePk];
export type set_user_roleCreationAttributes = set_user_roleAttributes;

export class set_user_role extends Model<set_user_roleAttributes, set_user_roleCreationAttributes> implements set_user_roleAttributes {
  id!: number;
  name!: string;

  // set_user_role hasMany dba_user_roles via user_role
  dba_user_roles!: dba_user_roles[];
  getDba_user_roles!: Sequelize.HasManyGetAssociationsMixin<dba_user_roles>;
  setDba_user_roles!: Sequelize.HasManySetAssociationsMixin<dba_user_roles, dba_user_rolesId>;
  addDba_user_role!: Sequelize.HasManyAddAssociationMixin<dba_user_roles, dba_user_rolesId>;
  addDba_user_roles!: Sequelize.HasManyAddAssociationsMixin<dba_user_roles, dba_user_rolesId>;
  createDba_user_role!: Sequelize.HasManyCreateAssociationMixin<dba_user_roles>;
  removeDba_user_role!: Sequelize.HasManyRemoveAssociationMixin<dba_user_roles, dba_user_rolesId>;
  removeDba_user_roles!: Sequelize.HasManyRemoveAssociationsMixin<dba_user_roles, dba_user_rolesId>;
  hasDba_user_role!: Sequelize.HasManyHasAssociationMixin<dba_user_roles, dba_user_rolesId>;
  hasDba_user_roles!: Sequelize.HasManyHasAssociationsMixin<dba_user_roles, dba_user_rolesId>;
  countDba_user_roles!: Sequelize.HasManyCountAssociationsMixin;
  // set_user_role hasMany dbm_user via user_role
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

  static initModel(sequelize: Sequelize.Sequelize): typeof set_user_role {
    return set_user_role.init({
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
    tableName: 'set_user_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_user_role_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_user_role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
