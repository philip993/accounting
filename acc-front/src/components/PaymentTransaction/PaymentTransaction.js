import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Style
import './PaymentTransactionStyle.scss';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
// Redux Actions
import {
  inputCreatePaymentAccount,
  inputCreatePaymentCredit,
  inputCreatePaymentCustomer,
  inputCreatePaymentDebit,
  inputCreatePaymentDescription,
  inputCreatePaymentVendor,
  requestCreatePaymentTransaction,
} from './PaymentTransactionActions';
import {
  inputTransactionsAccount,
  inputTransactionsCredit,
  inputTransactionsDebit,
  inputTransactionsDescription,
  requestCreateTransactions,
  selectNewRow,
} from '../Transactions/TransactionsActions';
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
import { requestGetAllCustomers } from '../Customer/CustomerActions';
import { requestGetAllVendors } from '../Vendor/VendorActions';

const PaymentTransaction = () => {
  const {
    allCustomers,
    allVendors,
    accounts,
    userType,
    newPaymentTransaction,
    transactionsDescription,
    transactionsDate,
    transactionsRow,
    transactionsDebit,
    transactionsCredit,
    documentType,
    vendor,
    customer,
    account,
    invoice,
    paymentVendor,
    paymentCustomer,
    paymentAccount,
    paymentDescription,
    paymentRow,
    paymentDate,
    paymentDebit,
    paymentCredit,
  } = useSelector((state) => ({
    ...state.PaymentTransactionReducer,
    ...state.ChartAccountsReducer,
    ...state.VendorReducer,
    ...state.CustomerReducer,
    ...state.TransactionsReducer,
  }));
  const dispatch = useDispatch();
  const { handleSubmit, message, errors, register, control } = useForm();

  const [transactionType, setTransactionType] = useState('');
  const [sec, SetSec] = useState();

  const handleTransactionType = (e) => {
    setTransactionType(e.target.value);
  };

  const handleTransactionsAccount = (e) => {
    dispatch(inputCreatePaymentAccount(e.target.value));
  };

  const handleTransactionUserType = (e) => {
    SetSec(e.target.value);
  };

  const handleTransactionsDescription = (e) => {
    dispatch(inputCreatePaymentDescription(e.target.value));
  };

  const handleTransactionsDebit = (e) => {
    dispatch(inputCreatePaymentDebit(e.target.value));
  };

  const handleTransactionsCredit = (e) => {
    dispatch(inputCreatePaymentCredit(e.target.value));
  };

  const handleCustomer = (e) => {
    dispatch(inputCreatePaymentCustomer(e.target.value));
  };

  const handleVendor = (e) => {
    dispatch(inputCreatePaymentVendor(e.target.value));
  };

  const handleNewRow = (e) => {
    dispatch(selectNewRow(e));
  };

  const submitForm = (e) => {
    dispatch(requestCreatePaymentTransaction());
  };

  useEffect(() => {
    dispatch(requestGetAllCustomers());
    dispatch(requestGetAllVendors());
  }, []);
  return (
    <div className="paymentTransction">
      <form
        className="paymentTrransactionForm"
        onSubmit={handleSubmit(submitForm)}
      >
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Transaction Type</FormLabel>
          <Controller
            control={control}
            name="transactionType"
            render={({ onChange, value, name, message }) => (
              <Select
                className="formInput"
                name="transactionType"
                value={transactionType}
                onChange={handleTransactionType}
                inputRef={register({
                  required: 'This field is required!',
                })}
              >
                <MenuItem value="vendor">Vendor</MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="gl">G/L</MenuItem>
                <MenuItem value="bank">Bank Account</MenuItem>
              </Select>
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.transactionType && errors.transactionType.message}
          </FormHelperText>
        </FormGroup>

        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Name</FormLabel>
          <Controller
            control={control}
            name="userType"
            render={({ onChange, value, name, message }) => (
              <Select
                className="formInput"
                name="userType"
                value={
                  transactionType === 'vendor' ? paymentVendor : paymentCustomer
                }
                onChange={
                  transactionType === 'vendor' ? handleVendor : handleCustomer
                }
                inputRef={register({
                  required: 'This field is required!',
                })}
              >
                {transactionType === 'vendor'
                  ? allVendors.map(({ vendorId, vendorName }) => (
                      <MenuItem value={vendorId}>{vendorName}</MenuItem>
                    ))
                  : transactionType === 'customer'
                  ? allCustomers.map(({ customerId, customerName }) => (
                      <MenuItem value={customerId}>{customerName}</MenuItem>
                    ))
                  : transactionType === 'gl'
                  ? accounts.map(({ accountId, accountCode, accountName }) => (
                      <MenuItem value={accountId}>
                        {accountCode} - {accountName}
                      </MenuItem>
                    ))
                  : ''}
              </Select>
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.paymentAccount && errors.paymentAccount.message}
          </FormHelperText>
        </FormGroup>

        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Account</FormLabel>
          <Controller
            control={control}
            name="paymentAccount"
            render={({ onChange, value, name, message }) => (
              <Select
                className="formInput"
                name="paymentAccount"
                value={paymentAccount}
                onChange={handleTransactionsAccount}
                inputRef={register({
                  required: 'This field is required!',
                })}
              >
                {transactionType === 'gl' ? (
                  accounts.map(({ accountId, accountCode, accountName }) => (
                    <MenuItem value={accountId}>
                      {accountCode} - {accountName}
                    </MenuItem>
                  ))
                ) : transactionType === 'customer' ? (
                  <MenuItem value="2">1</MenuItem>
                ) : transactionType === 'vendor' ? (
                  <MenuItem value="3">2</MenuItem>
                ) : (
                  ''
                )}
                {accounts.map(({ accountId, accountCode, accountName }) => (
                  <MenuItem value={accountId}>
                    {accountCode} - {accountName}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.paymentAccount && errors.paymentAccount.message}
          </FormHelperText>
        </FormGroup>

        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Description</FormLabel>
          <Controller
            control={control}
            name="paymentDescription"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="paymentDescription"
                value={paymentDescription}
                onChange={handleTransactionsDescription}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.paymentDescription && errors.paymentDescription.message}
          </FormHelperText>
        </FormGroup>

        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Debit</FormLabel>
          <Controller
            control={control}
            name="paymentDebit"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="paymentDebit"
                type="number"
                value={paymentDebit}
                onChange={handleTransactionsDebit}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.paymentDebit && errors.paymentDebit.message}
          </FormHelperText>
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Credit</FormLabel>
          <Controller
            control={control}
            name="paymentCredit"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="paymentCredit"
                value={paymentCredit}
                onChange={handleTransactionsCredit}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.paymentCredit && errors.paymentCredit.message}
          </FormHelperText>
        </FormGroup>

        <FormGroup className="formGroupButton">
          <Button
            className="saveButton"
            onClick={handleNewRow.bind(this, {
              paymentAccount,
              paymentVendor:
                transactionType === 'vendor' ? paymentVendor : null,
              paymentCustomer:
                transactionType === 'customer' ? paymentCustomer : null,
              paymentDescription,
              paymentDate,
              paymentDebit: parseInt(paymentDebit),
              paymentCredit: parseInt(paymentCredit),
            })}
          >
            <AddBoxIcon fontSize="large" className="plusIcon" />
          </Button>
        </FormGroup>
        <Button type={'submit'}>POST</Button>
      </form>

      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">Account</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Vendor</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Debit</TableCell>
            <TableCell className="tableCell">Credit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          {paymentRow.map(
            ({
              paymentAccount,
              paymentCustomer,
              paymentVendor,
              paymentDescription,
              paymentDebit,
              paymentCredit,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">{paymentAccount}</TableCell>
                <TableCell className="tableCell">{paymentCustomer}</TableCell>
                <TableCell className="tableCell">{paymentVendor}</TableCell>
                <TableCell className="tableCell">
                  {paymentDescription}
                </TableCell>
                <TableCell className="tableCell">
                  {paymentDebit.toFixed(2)} $
                </TableCell>
                <TableCell className="tableCell">
                  {paymentCredit.toFixed(2)} $
                </TableCell>
              </TableRow>
            )
          )}

          <TableRow className="tableRow">
            <TableCell className="tableCellTotal" colSpan={2}>
              Complete Transactions
            </TableCell>
            <TableCell className="tableCellTotal" colSpan={2}>
              {/* <Button
                // disabled={clicked === true}
                className="tableBtn"
                onClick={handleTotalPayablesRow.bind(this, {
                  account: 2,
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
              </Button> */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentTransaction;
