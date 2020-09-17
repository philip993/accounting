import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
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
import {
  requestCreateTransactions,
  inputTransactionsAccount,
  inputTransactionsDebit,
  inputTransactionsCredit,
  inputTransactionsDescription,
  selectNewRow,
} from './TransactionsActions';
import { requestGetChartOfAccounts } from '../ChartAccounts/ChartAccountsActions';

const Transactions = () => {
  const {
    account,
    vendor,
    invoice,
    transactionsDescription,
    transactionsDebit,
    transactionsCredit,
    transactionsRow,
    accounts,
    allVendors,
  } = useSelector((state) => ({
    ...state.TransactionsReducer,
    ...state.ChartAccountsReducer,
    ...state.VendorReducer,
  }));
  const dispatch = useDispatch();
  const { handleSubmit, message, errors, register, control } = useForm();

  useEffect(() => {
    dispatch(requestGetChartOfAccounts());
  }, []);

  const handleTransactionsAccount = (e) => {
    dispatch(inputTransactionsAccount(e.target.value));
  };

  const handleTransactionsInvoice = (e) => {};

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

  const submitForm = (e) => {
    dispatch(requestCreateTransactions());
  };

  return (
    <div className="transactions">
      <form className="transactionsForm" onSubmit={handleSubmit(submitForm)}>
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
          <FormLabel className="formLabel">Vendor</FormLabel>
          <Controller
            control={control}
            name="vendor"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="vendor"
                value={vendor}
                disabled
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.vendor && errors.vendor.message}
          </FormHelperText>
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Invoice</FormLabel>
          <Controller
            control={control}
            name="account"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="invoice"
                value={invoice}
                onChange={handleTransactionsInvoice}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.invoice && errors.invoice.message}
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
            className="saveButton"
            onClick={handleNewRow.bind(this, {
              account,
              vendor,
              invoice,
              transactionsDescription,
              transactionsDebit,
              transactionsCredit,
            })}
          >
            +
          </Button>
        </FormGroup>
      </form>
      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">Account</TableCell>
            <TableCell className="tableCell">Vendor</TableCell>
            <TableCell className="tableCell">Invoice</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Debit</TableCell>
            <TableCell className="tableCell">Credit</TableCell>
          </TableRow>
        </TableHead>
        {transactionsRow.map(
          ({
            account,
            vendor,
            invoice,
            transactionsDescription,
            transactionsDebit,
            transactionsCredit,
          }) => (
            <TableRow className="tableRow">
              <TableCell className="tableCell">{account}</TableCell>
              <TableCell className="tableCell">{vendor}</TableCell>
              <TableCell className="tableCell">{invoice}</TableCell>
              <TableCell className="tableCell">
                {transactionsDescription}
              </TableCell>
              <TableCell className="tableCell">{transactionsDebit}</TableCell>
              <TableCell className="tableCell">
                {transactionsDescription}
              </TableCell>
            </TableRow>
          )
        )}
        <TableBody className="tableBody"></TableBody>
      </Table>
    </div>
  );
};

export default Transactions;
