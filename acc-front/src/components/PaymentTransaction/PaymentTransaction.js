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
  inputCreatePaymentVendor,
  requestCreatePayTransactions,
  selectNewRow,
  getPaymentTransactionsTotal,
} from './PaymentTransactionActions';
import { requestGetAllCustomers } from '../Customer/CustomerActions';
import { requestGetAllVendors } from '../Vendor/VendorActions';
import { requestGetChartOfAccounts } from '../ChartAccounts/ChartAccountsActions';
import { requestGetPaymentJournals } from '../PaymentJournals/PaymentJournalsActions';
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

const PaymentTransaction = () => {
  const {
    allCustomers,
    allVendors,
    accounts,
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
    ...state.PaymentJournalsReducer,
    ...state.CreatePaymentJournal,
  }));
  const dispatch = useDispatch();
  const { handleSubmit, message, errors, register, control } = useForm();

  const [transactionType, setTransactionType] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleTransactionType = (e) => {
    setTransactionType(e.target.value);
  };

  const handleTransactionsAccount = (e) => {
    dispatch(inputCreatePaymentAccount(parseInt(e.target.value)));
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

  const handleReconcileRow = (e) => {
    dispatch(getPaymentTransactionsTotal(e));
    setClicked(true);
  };

  const submitForm = async (e) => {
    await dispatch(requestCreatePayTransactions());
  };

  useEffect(() => {
    dispatch(requestGetAllCustomers());
    dispatch(requestGetAllVendors());
    dispatch(requestGetChartOfAccounts());
    dispatch(requestGetPaymentJournals());
  }, []);

  return (
    <div className="paymentTransction">
      <form
        className="paymentTransactionForm"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="one">
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
                    transactionType === 'vendor'
                      ? paymentVendor
                      : paymentCustomer
                  }
                  onChange={
                    transactionType === 'vendor' ? handleVendor : handleCustomer
                  }
                  inputRef={register({
                    required: 'This field is required!',
                  })}
                >
                  {transactionType === 'vendor' ? (
                    allVendors.map(({ vendorId, vendorName }) => (
                      <MenuItem value={vendorId}>{vendorName}</MenuItem>
                    ))
                  ) : transactionType === 'customer' ? (
                    allCustomers.map(({ customerId, customerName }) => (
                      <MenuItem value={customerId}>{customerName}</MenuItem>
                    ))
                  ) : transactionType === 'gl' ? (
                    <MenuItem>-----</MenuItem>
                  ) : (
                    ''
                  )}
                </Select>
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.userType && errors.userType.message}
            </FormHelperText>
          </FormGroup>
        </div>

        <div className="two">
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
                    <MenuItem value="2">1 - Accounts Receivables</MenuItem>
                  ) : transactionType === 'vendor' ? (
                    <MenuItem value="3">2 - Accounts Payables</MenuItem>
                  ) : (
                    ''
                  )}
                </Select>
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.paymentAccount && errors.paymentAccount.message}
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
                paymentDate,
                paymentDebit: parseInt(paymentDebit),
                paymentCredit: parseInt(paymentCredit),
              })}
            >
              <AddBoxIcon fontSize="large" className="plusIcon" />
            </Button>
          </FormGroup>
        </div>
      </form>

      <Table className="table">
        <TableHead className="tableHead">
          <TableRow className="tableRow">
            <TableCell className="tableCell">Account</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Vendor</TableCell>
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
              paymentDebit,
              paymentCredit,
            }) => (
              <TableRow className="tableRow">
                <TableCell className="tableCell">
                  {paymentAccount === '' ? '' : paymentAccount - 1}
                </TableCell>
                <TableCell className="tableCell">{paymentCustomer}</TableCell>
                <TableCell className="tableCell">{paymentVendor}</TableCell>
                <TableCell className="tableCell">
                  {parseInt(paymentDebit)} $
                </TableCell>
                <TableCell className="tableCell">
                  {parseInt(paymentCredit)} $
                </TableCell>
              </TableRow>
            )
          )}

          <TableRow className="tableRow">
            <TableCell className="tableCellTotal" colSpan={2}>
              Reconcile Journal
            </TableCell>
            <TableCell className="tableCellTotal" colSpan={2}>
              <Button
                disabled={clicked === true}
                className="tableBtn"
                onClick={handleReconcileRow.bind(this, {
                  paymentAccount: 2,
                  paymentVendor: null,
                  paymentCustomer: null,
                  paymentDebit: paymentRow.reduce(
                    (a, b) => a + b.paymentCredit,
                    0
                  ),
                  paymentCredit: paymentRow.reduce(
                    (a, b) => a + b.paymentDebit,
                    0
                  ),
                })}
              >
                Yes
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentTransaction;
