import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { set_user_action, set_user_actionId } from './set_user_action';
import type { set_user_role, set_user_roleId } from './set_user_role';

export interface dba_user_rolesAttributes {
  id: number;
  user_role: number;
  action_id: number;
}

export type dba_user_rolesPk = "id";
export type dba_user_rolesId = dba_user_roles[dba_user_rolesPk];
export type dba_user_rolesCreationAttributes = dba_user_rolesAttributes;

export class dba_user_roles extends Model<dba_user_rolesAttributes, dba_user_rolesCreationAttributes> implements dba_user_rolesAttributes {
  id!: number;
  user_role!: number;
  action_id!: number;

  // dba_user_roles belongsTo set_user_action via action_id
  action!: set_user_action;
  getAction!: Sequelize.BelongsToGetAssociationMixin<set_user_action>;
  setAction!: Sequelize.BelongsToSetAssociationMixin<set_user_action, set_user_actionId>;
  createAction!: Sequelize.BelongsToCreateAssociationMixin<set_user_action>;
  // dba_user_roles belongsTo set_user_role via user_role
  user_role_set_user_role!: set_user_role;
  getUser_role_set_user_role!: Sequelize.BelongsToGetAssociationMixin<set_user_role>;
  setUser_role_set_user_role!: Sequelize.BelongsToSetAssociationMixin<set_user_role, set_user_roleId>;
  createUser_role_set_user_role!: Sequelize.BelongsToCreateAssociationMixin<set_user_role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dba_user_roles {
    return dba_user_roles.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'set_user_role',
        key: 'id'
      }
    },
    action_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'set_user_action',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'dba_user_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dba_user_roles_id_user_role_action_id_idx",
        fields: [
          { name: "id" },
          { name: "user_role" },
          { name: "action_id" },
        ]
      },
      {
        name: "dba_user_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
