import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import {
  inputSalesInvoiceCustomer,
  inputSalesInvoiceDate,
  inputSalesInvoiceDue,
  requestCreateSalesInvoice,
} from './CreateSalesInvoiceActions';
import { requestCreateSalesTransactions } from '../Transactions/TransactionsActions';
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
import { requestGetAllSalesInvoices } from '../SalesInvoice/SalesInvoiceActions';

const CreateSalesInvoice = () => {
  let {
    newSalesInvoice,
    newSalesInvoiceError,
    customer,
    vendor,
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
    dispatch(requestGetAllSalesInvoices());
  }, []);

  const handleSalesInvoiceCustomer = (e) => {
    dispatch(inputSalesInvoiceCustomer(e.target.value));
    setClicked(true);
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
                    .filter((cust) => cust.customerId === customer)
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
                    .filter((cust) => cust.customerId === customer)
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
                    .filter((cust) => cust.customerId === customer)
                    .map(({ customerTaxNumber }) => (
                      <Typography>{customerTaxNumber}</Typography>
                    ))}
            </div>
          </FormGroup>
        </div>
        <div className="two">
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
              {errors.salesInvoiceDate && errors.salesInvoiceDate.message}
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
              {errors.salesInvoiceDue && errors.salesInvoiceDue.message}
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
                  (a, b) => a + b.transactionsCredit,
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
