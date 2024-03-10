import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { set_list_status, set_list_statusId } from './set_list_status';

export interface list_payerAttributes {
  id: number;
  name: string;
  status_id: number;
}

export type list_payerPk = "id";
export type list_payerId = list_payer[list_payerPk];
export type list_payerCreationAttributes = list_payerAttributes;

export class list_payer extends Model<list_payerAttributes, list_payerCreationAttributes> implements list_payerAttributes {
  id!: number;
  name!: string;
  status_id!: number;

  // list_payer belongsTo set_list_status via status_id
  status!: set_list_status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<set_list_status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<set_list_status, set_list_statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<set_list_status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof list_payer {
    return list_payer.init({
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
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'set_list_status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'list_payer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "list_payer_id_status_id_idx",
        fields: [
          { name: "id" },
          { name: "status_id" },
        ]
      },
      {
        name: "list_payer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
