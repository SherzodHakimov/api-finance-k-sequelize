import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { set_user_role, set_user_roleId } from './set_user_role';
import type { set_user_status, set_user_statusId } from './set_user_status';

export interface dbm_userAttributes {
  id: number;
  login: string;
  name1: string;
  name2: string;
  password: string;
  user_role: number;
  status_id: number;
  last_auth_at: Date;
  created_at: Date;
}

export type dbm_userPk = "id";
export type dbm_userId = dbm_user[dbm_userPk];
export type dbm_userOptionalAttributes = "created_at";
export type dbm_userCreationAttributes = Optional<dbm_userAttributes, dbm_userOptionalAttributes>;

export class dbm_user extends Model<dbm_userAttributes, dbm_userCreationAttributes> implements dbm_userAttributes {
  id!: number;
  login!: string;
  name1!: string;
  name2!: string;
  password!: string;
  user_role!: number;
  status_id!: number;
  last_auth_at!: Date;
  created_at!: Date;

  // dbm_user belongsTo set_user_role via user_role
  user_role_set_user_role!: set_user_role;
  getUser_role_set_user_role!: Sequelize.BelongsToGetAssociationMixin<set_user_role>;
  setUser_role_set_user_role!: Sequelize.BelongsToSetAssociationMixin<set_user_role, set_user_roleId>;
  createUser_role_set_user_role!: Sequelize.BelongsToCreateAssociationMixin<set_user_role>;
  // dbm_user belongsTo set_user_status via status_id
  status!: set_user_status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<set_user_status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<set_user_status, set_user_statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<set_user_status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dbm_user {
    return dbm_user.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      login: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      name1: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      name2: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      user_role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'set_user_role',
          key: 'id'
        }
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'set_user_status',
          key: 'id'
        }
      },
      last_auth_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      created_at: ''
    }, {
    sequelize,
    tableName: 'dbm_user',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "dbm_user_id_user_role_status_id_idx",
        fields: [
          { name: "id" },
          { name: "user_role" },
          { name: "status_id" },
        ]
      },
      {
        name: "dbm_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
