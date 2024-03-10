import { Column, DataType, Model, Table } from "sequelize-typescript";

interface BankCreationAttrs{
    name: string
}

@Table({tableName: 'list_bank_test123'})
export class MBanks extends Model<MBanks, BankCreationAttrs>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    name: string
}