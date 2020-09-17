import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import {
  requestCreateInvoice,
  inputInvoiceVendor,
  inputInvoiceDate,
  inputInvoiceDue,
  inputInvoiceNumber,
} from './CreateInvoiceActions';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
// Scss
import './CreateInvoiceStyle.scss';
// Material Ui
import {
  FormGroup,
  FormLabel,
  InputBase,
  FormHelperText,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import Transactions from '../Transactions/Transactions';
import { requestGetAllVendors } from '../Vendor/VendorActions';
import { inputTransactionsVendor } from '../Transactions/TransactionsActions';

const CreateInvoice = () => {
  const {
    newInvoice,
    newInvoiceError,
    vendor,
    invoiceNumber,
    invoiceDate,
    invoiceDue,
    allVendors,
  } = useSelector((state) => ({
    ...state.CreateInvoiceReducer,
    ...state.VendorReducer,
  }));
  const dispatch = useDispatch();
  const { register, handleSubmit, message, control, errors } = useForm();

  useEffect(() => {
    dispatch(requestGetAllVendors());
  }, []);

  const handleInvoiceVendor = (e) => {
    dispatch(inputInvoiceVendor(e.target.value));
    dispatch(inputTransactionsVendor(e.target.value));
  };

  const handleInvoiceNumber = (e) => {
    dispatch(inputInvoiceNumber(e.target.value));
  };

  const handleInvoiceDate = (e) => {
    dispatch(inputInvoiceDate(e.target.value));
  };

  const handleInvoiceDue = (e) => {
    dispatch(inputInvoiceDue(e.target.value));
  };

  const submitForm = (e) => {
    dispatch(requestCreateInvoice());
  };

  return (
    <div className="createInvoice">
      <h1>Create Invoice</h1>
      <form className="createInvoiceForm" onSubmit={handleSubmit(submitForm)}>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Vendor Code</FormLabel>
          <Controller
            control={control}
            name="vendor"
            render={({ onChange, value, name, message }) => (
              <Select
                className="formInput"
                name="vendor"
                value={vendor}
                onChange={handleInvoiceVendor}
                inputRef={register({
                  required: 'This field is required',
                })}
              >
                {allVendors.map(({ vendorId, vendorName }) => (
                  <MenuItem value={vendorId}>{vendorName}</MenuItem>
                ))}
              </Select>
            )}
          />

          <FormHelperText className="formHelperText" error>
            {errors.vendor && errors.vendor.message}
          </FormHelperText>
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Invoice No.</FormLabel>
          <Controller
            control={control}
            name="invoiceNumber"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="invoiceNumber"
                value={invoiceNumber}
                onChange={handleInvoiceNumber}
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
            name="invoiceDate"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="invoiceDate"
                value={invoiceDate}
                onChange={handleInvoiceDate}
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
            name="invoiceDue"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="invoiceDue"
                value={invoiceDue}
                onChange={handleInvoiceDue}
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
        <FormGroup className="formGroupButton">
          <Button type={'submit'}>Post</Button>
        </FormGroup>
      </form>
      <Transactions />
    </div>
  );
};

export default CreateInvoice;
