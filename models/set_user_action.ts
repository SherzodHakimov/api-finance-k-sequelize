import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dba_user_roles, dba_user_rolesId } from './dba_user_roles';

export interface set_user_actionAttributes {
  id: number;
  name: string;
}

export type set_user_actionPk = "id";
export type set_user_actionId = set_user_action[set_user_actionPk];
export type set_user_actionCreationAttributes = set_user_actionAttributes;

export class set_user_action extends Model<set_user_actionAttributes, set_user_actionCreationAttributes> implements set_user_actionAttributes {
  id!: number;
  name!: string;

  // set_user_action hasMany dba_user_roles via action_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof set_user_action {
    return set_user_action.init({
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
    tableName: 'set_user_action',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "set_user_action_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "set_user_action_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
