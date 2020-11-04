import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
// React Router Dom
import { useLocation } from 'react-router-dom';
// Scss
import './TransactionsStyle.scss';
// Material Ui
import {
  InputBase,
  FormGroup,
  FormLabel,
  FormHelperText,
  Select,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
// Redux Actions
import {
  requestCreateTransactions,
  inputTransactionsAccount,
  inputTransactionsDebit,
  inputTransactionsCredit,
  inputTransactionsDescription,
  selectNewRow,
  getTransactionsTotal,
  requestCreateSalesTransactions,
} from './TransactionsActions';
import { requestGetChartOfAccounts } from '../ChartAccounts/ChartAccountsActions';
import { inputInvoiceTotal } from '../CreateInvoice/CreateInvoiceActions';
import { inputSalesInvoiceTotal } from '../CreateSalesInvoice/CreateSalesInvoiceActions';

const Transactions = () => {
  let {
    account,
    vendor,
    invoice,
    customer,
    transactionsDescription,
    transactionsDate,
    transactionsDebit,
    transactionsCredit,
    transactionsRow,
    accounts,
    newInvoice,
  } = useSelector((state) => ({
    ...state.TransactionsReducer,
    ...state.ChartAccountsReducer,
    ...state.CreateInvoiceReducer,
    ...state.CreateSalesInvoiceReducer,
  }));
  const dispatch = useDispatch();
  const { handleSubmit, message, errors, register, control } = useForm();

  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(requestGetChartOfAccounts());
  }, []);

  const handleTransactionsAccount = (e) => {
    dispatch(inputTransactionsAccount(e.target.value));
  };

  const handleTransactionsDescription = (e) => {
    dispatch(inputTransactionsDescription(e.target.value));
  };

  const handleTransactionsDebit = (e) => {
    dispatch(inputTransactionsDebit(e.target.value));
  };

  const handleTransactionsCredit = (e) => {
    dispatch(inputTransactionsCredit(e.target.value));
  };

  const handleNewRow = (e) => {
    dispatch(selectNewRow(e));
  };

  const handleTotalPayablesRow = (e) => {
    dispatch(getTransactionsTotal(e));
    dispatch(inputInvoiceTotal(e.transactionsCredit));
    setClicked(true);
  };

  const handleTotalReceivablesRow = (e) => {
    dispatch(getTransactionsTotal(e));
    dispatch(inputSalesInvoiceTotal(e.transactionsDebit));
    setClicked(true);
  };

  const submitPayablesTransaction = (e) => {
    dispatch(requestCreateTransactions());
  };

  const submitReceivablesTransaction = (e) => {
    dispatch(requestCreateSalesTransactions());
  };

  return (
    <div className="transactions">
      {location.pathname === '/payables/createinvoice' ? (
        <form
          className="transactionsForm"
          onSubmit={handleSubmit(submitPayablesTransaction)}
        >
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Account</FormLabel>
            <Controller
              control={control}
              name="account"
              render={({ onChange, value, name, message }) => (
                <Select
                  className="formInput"
                  name="account"
                  value={account}
                  onChange={handleTransactionsAccount}
                  inputRef={register({
                    required: 'This field is required!',
                  })}
                >
                  {accounts.map(({ accountId, accountCode, accountName }) => (
                    <MenuItem value={accountId}>
                      {accountCode} - {accountName}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.account && errors.account.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Description</FormLabel>
            <Controller
              control={control}
              name="transactionsDescription"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="transactionsDescription"
                  value={transactionsDescription}
                  onChange={handleTransactionsDescription}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.transactionsDescription &&
                errors.transactionsDescription.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Debit</FormLabel>
            <Controller
              control={control}
              name="transactionsDebit"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="transactionsDebit"
                  type="number"
                  value={transactionsDebit}
                  onChange={handleTransactionsDebit}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.transactionsDebit && errors.transactionsDebit.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Credit</FormLabel>
            <Controller
              control={control}
              name="transactionsCredit"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="transactionsCredit"
                  value={transactionsCredit}
                  onChange={handleTransactionsCredit}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.transactionsCredit && errors.transactionsCredit.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroupButton">
            <Button
              disabled={clicked === true}
              className="saveButton"
              onClick={handleNewRow.bind(this, {
                account,
                userType: vendor,
                documentType: invoice,
                transactionsDescription,
                transactionsDate,
                transactionsDebit: parseInt(transactionsDebit),
                transactionsCredit: parseInt(transactionsCredit),
              })}
            >
              <AddBoxIcon fontSize="large" className="plusIcon" />
            </Button>
          </FormGroup>
        </form>
      ) : (
        <form
          className="transactionsForm"
          onSubmit={handleSubmit(submitReceivablesTransaction)}
        >
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Account</FormLabel>
            <Controller
              control={control}
              name="account"
              render={({ onChange, value, name, message }) => (
                <Select
                  className="formInput"
                  name="account"
                  value={account}
                  onChange={handleTransactionsAccount}
                  inputRef={register({
                    required: 'This field is required!',
                  })}
                >
                  {accounts.map(({ accountId, accountCode, accountName }) => (
                    <MenuItem value={accountId}>
                      {accountCode} - {accountName}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.account && errors.account.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Description</FormLabel>
            <Controller
              control={control}
              name="transactionsDescription"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="transactionsDescription"
                  value={transactionsDescription}
                  onChange={handleTransactionsDescription}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.transactionsDescription &&
                errors.transactionsDescription.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Debit</FormLabel>
            <Controller
              control={control}
              name="transactionsDebit"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="transactionsDebit"
                  type="number"
                  value={transactionsDebit}
                  onChange={handleTransactionsDebit}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.transactionsDebit && errors.transactionsDebit.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Credit</FormLabel>
            <Controller
              control={control}
              name="transactionsCredit"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="transactionsCredit"
                  value={transactionsCredit}
                  onChange={handleTransactionsCredit}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.transactionsCredit && errors.transactionsCredit.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroupButton">
            <Button
              disabled={clicked === true}
              className="saveButton"
              onClick={handleNewRow.bind(this, {
                account,
                userType: customer,
                documentType: invoice,
                transactionsDescription,
                transactionsDate,
                transactionsDebit: parseInt(transactionsDebit),
                transactionsCredit: parseInt(transactionsCredit),
              })}
            >
              <AddBoxIcon fontSize="large" className="plusIcon" />
            </Button>
          </FormGroup>
        </form>
      )}

      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">Account</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Debit</TableCell>
            <TableCell className="tableCell">Credit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {transactionsRow.map(
            ({
              account,
              transactionsDescription,
              transactionsDebit,
              transactionsCredit,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">
                  {account === '' ? '' : account - 1}
                </TableCell>
                <TableCell className="tableCell">
                  {transactionsDescription}
                </TableCell>
                <TableCell className="tableCell">
                  {transactionsDebit.toFixed(2)} $
                </TableCell>
                <TableCell className="tableCell">
                  {transactionsCredit.toFixed(2)} $
                </TableCell>
              </TableRow>
            )
          )}

          <TableRow className="tableRow">
            <TableCell className="tableCellTotal" colSpan={2}>
              Complete Transactions
            </TableCell>
            <TableCell className="tableCellTotal" colSpan={2}>
              {location.pathname === '/payables/createinvoice' ? (
                <Button
                  disabled={clicked === true}
                  className="tableBtn"
                  onClick={handleTotalPayablesRow.bind(this, {
                    account: 3,
                    userType: vendor,
                    documentType: invoice,
                    transactionsDescription: 'Payables',
                    transactionsDebit: 0,
                    transactionsCredit: transactionsRow.reduce(
                      (a, b) => a + b.transactionsDebit,
                      0
                    ),
                  })}
                >
                  Yes
                </Button>
              ) : (
                <Button
                  disabled={clicked === true}
                  className="tableBtn"
                  onClick={handleTotalReceivablesRow.bind(this, {
                    account: 2,
                    userType: customer,
                    documentType: invoice,
                    transactionsDescription: 'Recievables',
                    transactionsDebit: transactionsRow.reduce(
                      (a, b) => a + b.transactionsCredit,
                      0
                    ),
                    transactionsCredit: 0,
                  })}
                >
                  Yes
                </Button>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Transactions;
