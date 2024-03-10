import type { Sequelize } from "sequelize";
import { dba_expense_operation as _dba_expense_operation } from "./dba_expense_operation";
import type { dba_expense_operationAttributes, dba_expense_operationCreationAttributes } from "./dba_expense_operation";
import { dba_transfer_operation as _dba_transfer_operation } from "./dba_transfer_operation";
import type { dba_transfer_operationAttributes, dba_transfer_operationCreationAttributes } from "./dba_transfer_operation";
import { dba_user_roles as _dba_user_roles } from "./dba_user_roles";
import type { dba_user_rolesAttributes, dba_user_rolesCreationAttributes } from "./dba_user_roles";
import { dbm_currency_value as _dbm_currency_value } from "./dbm_currency_value";
import type { dbm_currency_valueAttributes, dbm_currency_valueCreationAttributes } from "./dbm_currency_value";
import { dbm_expense as _dbm_expense } from "./dbm_expense";
import type { dbm_expenseAttributes, dbm_expenseCreationAttributes } from "./dbm_expense";
import { dbm_operation as _dbm_operation } from "./dbm_operation";
import type { dbm_operationAttributes, dbm_operationCreationAttributes } from "./dbm_operation";
import { dbm_user as _dbm_user } from "./dbm_user";
import type { dbm_userAttributes, dbm_userCreationAttributes } from "./dbm_user";
import { list_account as _list_account } from "./list_account";
import type { list_accountAttributes, list_accountCreationAttributes } from "./list_account";
import { list_bank as _list_bank } from "./list_bank";
import type { list_bankAttributes, list_bankCreationAttributes } from "./list_bank";
import { list_currency as _list_currency } from "./list_currency";
import type { list_currencyAttributes, list_currencyCreationAttributes } from "./list_currency";
import { list_expense as _list_expense } from "./list_expense";
import type { list_expenseAttributes, list_expenseCreationAttributes } from "./list_expense";
import { list_expense_group as _list_expense_group } from "./list_expense_group";
import type { list_expense_groupAttributes, list_expense_groupCreationAttributes } from "./list_expense_group";
import { list_measure as _list_measure } from "./list_measure";
import type { list_measureAttributes, list_measureCreationAttributes } from "./list_measure";
import { list_payer as _list_payer } from "./list_payer";
import type { list_payerAttributes, list_payerCreationAttributes } from "./list_payer";
import { set_account_type as _set_account_type } from "./set_account_type";
import type { set_account_typeAttributes, set_account_typeCreationAttributes } from "./set_account_type";
import { set_currency_type as _set_currency_type } from "./set_currency_type";
import type { set_currency_typeAttributes, set_currency_typeCreationAttributes } from "./set_currency_type";
import { set_list_status as _set_list_status } from "./set_list_status";
import type { set_list_statusAttributes, set_list_statusCreationAttributes } from "./set_list_status";
import { set_operation as _set_operation } from "./set_operation";
import type { set_operationAttributes, set_operationCreationAttributes } from "./set_operation";
import { set_operation_status as _set_operation_status } from "./set_operation_status";
import type { set_operation_statusAttributes, set_operation_statusCreationAttributes } from "./set_operation_status";
import { set_payment_doc as _set_payment_doc } from "./set_payment_doc";
import type { set_payment_docAttributes, set_payment_docCreationAttributes } from "./set_payment_doc";
import { set_user_action as _set_user_action } from "./set_user_action";
import type { set_user_actionAttributes, set_user_actionCreationAttributes } from "./set_user_action";
import { set_user_role as _set_user_role } from "./set_user_role";
import type { set_user_roleAttributes, set_user_roleCreationAttributes } from "./set_user_role";
import { set_user_status as _set_user_status } from "./set_user_status";
import type { set_user_statusAttributes, set_user_statusCreationAttributes } from "./set_user_status";

export {
  _dba_expense_operation as dba_expense_operation,
  _dba_transfer_operation as dba_transfer_operation,
  _dba_user_roles as dba_user_roles,
  _dbm_currency_value as dbm_currency_value,
  _dbm_expense as dbm_expense,
  _dbm_operation as dbm_operation,
  _dbm_user as dbm_user,
  _list_account as list_account,
  _list_bank as list_bank,
  _list_currency as list_currency,
  _list_expense as list_expense,
  _list_expense_group as list_expense_group,
  _list_measure as list_measure,
  _list_payer as list_payer,
  _set_account_type as set_account_type,
  _set_currency_type as set_currency_type,
  _set_list_status as set_list_status,
  _set_operation as set_operation,
  _set_operation_status as set_operation_status,
  _set_payment_doc as set_payment_doc,
  _set_user_action as set_user_action,
  _set_user_role as set_user_role,
  _set_user_status as set_user_status,
};

export type {
  dba_expense_operationAttributes,
  dba_expense_operationCreationAttributes,
  dba_transfer_operationAttributes,
  dba_transfer_operationCreationAttributes,
  dba_user_rolesAttributes,
  dba_user_rolesCreationAttributes,
  dbm_currency_valueAttributes,
  dbm_currency_valueCreationAttributes,
  dbm_expenseAttributes,
  dbm_expenseCreationAttributes,
  dbm_operationAttributes,
  dbm_operationCreationAttributes,
  dbm_userAttributes,
  dbm_userCreationAttributes,
  list_accountAttributes,
  list_accountCreationAttributes,
  list_bankAttributes,
  list_bankCreationAttributes,
  list_currencyAttributes,
  list_currencyCreationAttributes,
  list_expenseAttributes,
  list_expenseCreationAttributes,
  list_expense_groupAttributes,
  list_expense_groupCreationAttributes,
  list_measureAttributes,
  list_measureCreationAttributes,
  list_payerAttributes,
  list_payerCreationAttributes,
  set_account_typeAttributes,
  set_account_typeCreationAttributes,
  set_currency_typeAttributes,
  set_currency_typeCreationAttributes,
  set_list_statusAttributes,
  set_list_statusCreationAttributes,
  set_operationAttributes,
  set_operationCreationAttributes,
  set_operation_statusAttributes,
  set_operation_statusCreationAttributes,
  set_payment_docAttributes,
  set_payment_docCreationAttributes,
  set_user_actionAttributes,
  set_user_actionCreationAttributes,
  set_user_roleAttributes,
  set_user_roleCreationAttributes,
  set_user_statusAttributes,
  set_user_statusCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const dba_expense_operation = _dba_expense_operation.initModel(sequelize);
  const dba_transfer_operation = _dba_transfer_operation.initModel(sequelize);
  const dba_user_roles = _dba_user_roles.initModel(sequelize);
  const dbm_currency_value = _dbm_currency_value.initModel(sequelize);
  const dbm_expense = _dbm_expense.initModel(sequelize);
  const dbm_operation = _dbm_operation.initModel(sequelize);
  const dbm_user = _dbm_user.initModel(sequelize);
  const list_account = _list_account.initModel(sequelize);
  const list_bank = _list_bank.initModel(sequelize);
  const list_currency = _list_currency.initModel(sequelize);
  const list_expense = _list_expense.initModel(sequelize);
  const list_expense_group = _list_expense_group.initModel(sequelize);
  const list_measure = _list_measure.initModel(sequelize);
  const list_payer = _list_payer.initModel(sequelize);
  const set_account_type = _set_account_type.initModel(sequelize);
  const set_currency_type = _set_currency_type.initModel(sequelize);
  const set_list_status = _set_list_status.initModel(sequelize);
  const set_operation = _set_operation.initModel(sequelize);
  const set_operation_status = _set_operation_status.initModel(sequelize);
  const set_payment_doc = _set_payment_doc.initModel(sequelize);
  const set_user_action = _set_user_action.initModel(sequelize);
  const set_user_role = _set_user_role.initModel(sequelize);
  const set_user_status = _set_user_status.initModel(sequelize);

  dba_expense_operation.belongsTo(dbm_expense, { as: "expense_operation", foreignKey: "expense_operation_id"});
  dbm_expense.hasMany(dba_expense_operation, { as: "dba_expense_operations", foreignKey: "expense_operation_id"});
  dba_expense_operation.belongsTo(dbm_operation, { as: "outcome_operation", foreignKey: "outcome_operation_id"});
  dbm_operation.hasMany(dba_expense_operation, { as: "dba_expense_operations", foreignKey: "outcome_operation_id"});
  dba_transfer_operation.belongsTo(dbm_operation, { as: "income_operation", foreignKey: "income_operation_id"});
  dbm_operation.hasMany(dba_transfer_operation, { as: "dba_transfer_operations", foreignKey: "income_operation_id"});
  dba_transfer_operation.belongsTo(dbm_operation, { as: "outcome_operation", foreignKey: "outcome_operation_id"});
  dbm_operation.hasMany(dba_transfer_operation, { as: "outcome_operation_dba_transfer_operations", foreignKey: "outcome_operation_id"});
  dbm_operation.belongsTo(list_account, { as: "account", foreignKey: "account_id"});
  list_account.hasMany(dbm_operation, { as: "dbm_operations", foreignKey: "account_id"});
  list_account.belongsTo(list_bank, { as: "bank", foreignKey: "bank_id"});
  list_bank.hasMany(list_account, { as: "list_accounts", foreignKey: "bank_id"});
  dbm_currency_value.belongsTo(list_currency, { as: "currency", foreignKey: "currency_id"});
  list_currency.hasMany(dbm_currency_value, { as: "dbm_currency_values", foreignKey: "currency_id"});
  dbm_expense.belongsTo(list_currency, { as: "currency", foreignKey: "currency_id"});
  list_currency.hasMany(dbm_expense, { as: "dbm_expenses", foreignKey: "currency_id"});
  dbm_operation.belongsTo(list_currency, { as: "currency", foreignKey: "currency_id"});
  list_currency.hasMany(dbm_operation, { as: "dbm_operations", foreignKey: "currency_id"});
  list_account.belongsTo(list_currency, { as: "currency", foreignKey: "currency_id"});
  list_currency.hasMany(list_account, { as: "list_accounts", foreignKey: "currency_id"});
  dbm_expense.belongsTo(list_expense, { as: "expense", foreignKey: "expense_id"});
  list_expense.hasMany(dbm_expense, { as: "dbm_expenses", foreignKey: "expense_id"});
  dbm_expense.belongsTo(list_expense_group, { as: "expense_group", foreignKey: "expense_group_id"});
  list_expense_group.hasMany(dbm_expense, { as: "dbm_expenses", foreignKey: "expense_group_id"});
  list_expense.belongsTo(list_expense_group, { as: "expense_group", foreignKey: "expense_group_id"});
  list_expense_group.hasMany(list_expense, { as: "list_expenses", foreignKey: "expense_group_id"});
  dbm_expense.belongsTo(list_measure, { as: "measure", foreignKey: "measure_id"});
  list_measure.hasMany(dbm_expense, { as: "dbm_expenses", foreignKey: "measure_id"});
  dbm_expense.belongsTo(set_account_type, { as: "account_type", foreignKey: "account_type_id"});
  set_account_type.hasMany(dbm_expense, { as: "dbm_expenses", foreignKey: "account_type_id"});
  dbm_operation.belongsTo(set_account_type, { as: "account_type", foreignKey: "account_type_id"});
  set_account_type.hasMany(dbm_operation, { as: "dbm_operations", foreignKey: "account_type_id"});
  list_currency.belongsTo(set_currency_type, { as: "currency_type", foreignKey: "currency_type_id"});
  set_currency_type.hasMany(list_currency, { as: "list_currencies", foreignKey: "currency_type_id"});
  list_account.belongsTo(set_list_status, { as: "status", foreignKey: "status_id"});
  set_list_status.hasMany(list_account, { as: "list_accounts", foreignKey: "status_id"});
  list_expense.belongsTo(set_list_status, { as: "status", foreignKey: "status_id"});
  set_list_status.hasMany(list_expense, { as: "list_expenses", foreignKey: "status_id"});
  list_payer.belongsTo(set_list_status, { as: "status", foreignKey: "status_id"});
  set_list_status.hasMany(list_payer, { as: "list_payers", foreignKey: "status_id"});
  dbm_operation.belongsTo(set_operation, { as: "operation", foreignKey: "operation_id"});
  set_operation.hasMany(dbm_operation, { as: "dbm_operations", foreignKey: "operation_id"});
  dbm_expense.belongsTo(set_operation_status, { as: "status", foreignKey: "status_id"});
  set_operation_status.hasMany(dbm_expense, { as: "dbm_expenses", foreignKey: "status_id"});
  dbm_operation.belongsTo(set_operation_status, { as: "status", foreignKey: "status_id"});
  set_operation_status.hasMany(dbm_operation, { as: "dbm_operations", foreignKey: "status_id"});
  dbm_expense.belongsTo(set_payment_doc, { as: "payment_doc", foreignKey: "payment_doc_id"});
  set_payment_doc.hasMany(dbm_expense, { as: "dbm_expenses", foreignKey: "payment_doc_id"});
  dba_user_roles.belongsTo(set_user_action, { as: "action", foreignKey: "action_id"});
  set_user_action.hasMany(dba_user_roles, { as: "dba_user_roles", foreignKey: "action_id"});
  dba_user_roles.belongsTo(set_user_role, { as: "user_role_set_user_role", foreignKey: "user_role"});
  set_user_role.hasMany(dba_user_roles, { as: "dba_user_roles", foreignKey: "user_role"});
  dbm_user.belongsTo(set_user_role, { as: "user_role_set_user_role", foreignKey: "user_role"});
  set_user_role.hasMany(dbm_user, { as: "dbm_users", foreignKey: "user_role"});
  dbm_user.belongsTo(set_user_status, { as: "status", foreignKey: "status_id"});
  set_user_status.hasMany(dbm_user, { as: "dbm_users", foreignKey: "status_id"});

  return {
    dba_expense_operation: dba_expense_operation,
    dba_transfer_operation: dba_transfer_operation,
    dba_user_roles: dba_user_roles,
    dbm_currency_value: dbm_currency_value,
    dbm_expense: dbm_expense,
    dbm_operation: dbm_operation,
    dbm_user: dbm_user,
    list_account: list_account,
    list_bank: list_bank,
    list_currency: list_currency,
    list_expense: list_expense,
    list_expense_group: list_expense_group,
    list_measure: list_measure,
    list_payer: list_payer,
    set_account_type: set_account_type,
    set_currency_type: set_currency_type,
    set_list_status: set_list_status,
    set_operation: set_operation,
    set_operation_status: set_operation_status,
    set_payment_doc: set_payment_doc,
    set_user_action: set_user_action,
    set_user_role: set_user_role,
    set_user_status: set_user_status,
  };
}
