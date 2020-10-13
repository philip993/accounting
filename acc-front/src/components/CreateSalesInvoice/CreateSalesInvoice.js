import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import {
  inputSalesInvoiceCustomer,
  inputSalesInvoiceDate,
  inputSalesInvoiceTotal,
  inputSalesInvoiceDue,
  inputSalesInvoiceNumber,
  requestCreateSalesInvoice,
} from './CreateSalesInvoiceActions';
import {
  inputTransactionsVendor,
  requestCreateTransactions,
  requestCreateSalesTransactions,
} from '../Transactions/TransactionsActions';
import { requestGetAllCustomers } from '../Customer/CustomerActions';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
// Scss
import './CreateSalesInvoiceStyle.scss';
// Material Ui
import {
  FormGroup,
  FormLabel,
  InputBase,
  FormHelperText,
  Button,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
// React Components
import Transactions from '../Transactions/Transactions';

const CreateSalesInvoice = () => {
  let {
    newSalesInvoice,
    newSalesInvoiceError,
    customer,
    vendor,
    salesInvoiceNumber,
    salesInvoiceTotal,
    salesInvoiceDate,
    salesInvoiceDue,
    allCustomers,
    transactionsRow,
  } = useSelector((state) => ({
    ...state.CreateSalesInvoiceReducer,
    ...state.CustomerReducer,
    ...state.TransactionsReducer,
  }));
  const dispatch = useDispatch();
  const { register, handleSubmit, message, control, errors } = useForm();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    dispatch(requestGetAllCustomers());
  }, []);

  const handleSalesInvoiceCustomer = (e) => {
    dispatch(inputSalesInvoiceCustomer(e.target.value));
    dispatch(inputTransactionsVendor(e.target.value));
    setClicked(true);
  };

  const handleSalesInvoiceNumber = (e) => {
    dispatch(inputSalesInvoiceNumber(e.target.value));
  };

  const handleSalesInvoiceDate = (e) => {
    dispatch(inputSalesInvoiceDate(e.target.value));
  };

  const handleSalesInvoiceDue = (e) => {
    dispatch(inputSalesInvoiceDue(e.target.value));
  };

  const submitForm = async (e) => {
    await dispatch(requestCreateSalesInvoice());
    await dispatch(requestCreateSalesTransactions());
  };

  return (
    <div className="createInvoice">
      <h1>Create Sales Invoice</h1>
      <form className="createInvoiceForm" onSubmit={handleSubmit(submitForm)}>
        <div className="one">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Customer</FormLabel>
            <Controller
              control={control}
              name="customer"
              render={({ onChange, value, name, message }) => (
                <Select
                  className="formInput"
                  name="customer"
                  value={customer}
                  onChange={handleSalesInvoiceCustomer}
                  inputRef={register({
                    required: 'This field is required',
                  })}
                >
                  {allCustomers.map(({ customerId, customerName }) => (
                    <MenuItem value={customerId}>{customerName}</MenuItem>
                  ))}
                </Select>
              )}
            />

            <FormHelperText className="formHelperText" error>
              {errors.customer && errors.customer.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Code</FormLabel>
            <div className="formInput">
              {!clicked
                ? ''
                : allCustomers
                    .filter((cust) => cust.customerId === vendor)
                    .map(({ customerId }) => (
                      <Typography>{customerId}</Typography>
                    ))}
            </div>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Address</FormLabel>
            <div className="formInput">
              {!clicked
                ? ''
                : allCustomers
                    .filter((cust) => cust.customerId === vendor)
                    .map(({ customerAddress }) => (
                      <Typography>{customerAddress}</Typography>
                    ))}
            </div>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Tax Number</FormLabel>
            <div className="formInput">
              {!clicked
                ? ''
                : allCustomers
                    .filter((cust) => cust.customerId === vendor)
                    .map(({ customerTaxNumber }) => (
                      <Typography>{customerTaxNumber}</Typography>
                    ))}
            </div>
          </FormGroup>
        </div>
        <div className="two">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Sales Invoice No.</FormLabel>
            <Controller
              control={control}
              name="salesInvoiceNumber"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="salesInvoiceNumber"
                  value={salesInvoiceNumber}
                  onChange={handleSalesInvoiceNumber}
                  inputRef={register({
                    required: 'This field is required!',
                    minLength: {
                      value: 1,
                      message: 'Minimum length of one character..',
                    },
                    maxLength: {
                      value: 50,
                      message: 'Maximum length of fifty characters',
                    },
                  })}
                />
              )}
            />

            <FormHelperText className="formHelperText" error>
              {errors.invoiceNumber && errors.invoiceNumber.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Invoice Date</FormLabel>
            <Controller
              control={control}
              name="salesInvoiceDate"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="salesInvoiceDate"
                  type="date"
                  value={salesInvoiceDate}
                  onChange={handleSalesInvoiceDate}
                  inputRef={register({
                    required: 'This field is required!',
                  })}
                />
              )}
            />

            <FormHelperText className="formHelperText" error>
              {errors.invoiceDate && errors.invoiceDate.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Due Date</FormLabel>
            <Controller
              control={control}
              name="salesInvoiceDue"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="salesInvoiceDue"
                  type="date"
                  value={salesInvoiceDue}
                  onChange={handleSalesInvoiceDue}
                  inputRef={register({
                    required: 'This field is required!',
                  })}
                />
              )}
            />

            <FormHelperText className="formHelperText" error>
              {errors.invoiceDue && errors.invoiceDue.message}
            </FormHelperText>
          </FormGroup>
        </div>

        <Transactions />

        <div className="four">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Total</FormLabel>
            <Typography className="formTotal">
              {
                (salesInvoiceTotal = transactionsRow.reduce(
                  (a, b) => a + b.transactionsDebit,
                  0
                ))
              }{' '}
              $
            </Typography>
          </FormGroup>
        </div>

        <div className="three">
          <FormGroup className="formGroup">
            <Button className="saveButton" type={'submit'}>
              Post
            </Button>
          </FormGroup>
        </div>
      </form>
    </div>
  );
};

export default CreateSalesInvoice;
