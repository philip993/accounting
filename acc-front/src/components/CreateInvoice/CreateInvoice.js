import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Redux Actions
import {
  requestCreateInvoice,
  inputInvoiceVendor,
} from './CreateInvoiceActions';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
// Material Ui
import {
  FormGroup,
  FormLabel,
  InputBase,
  FormHelperText,
  Button,
} from '@material-ui/core';

const CreateInvoice = () => {
  const {
    newInvoice,
    newInvoiceError,
    vendor,
    invoiceNumber,
    invoiceDate,
    invoiceDue,
  } = useSelector((state) => state.CreateInvoiceReducer);
  const dispatch = useDispatch();
  const { register, handleSubmit, message, control, errors } = useForm();

  const handleInvoiceVendor = (e) => {
    dispatch(inputInvoiceVendor(e.target.value));
  };

  const handleInvoiceNumber = (e) => {
    dispatch(invoiceNumber(e.target.value));
  };

  const handleInvoiceDate = (e) => {
    dispatch(invoiceDate(e.target.value));
  };

  const handleInvoiceDue = (e) => {
    dispatch(invoiceDue(e.target.value));
  };

  const submitForm = () => {
    dispatch(requestCreateInvoice());
  };

  return (
    <div className="createInvoice">
      <h1>Create Invoice</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Vendor Code</FormLabel>
          <Controller
            control={control}
            name="vendor"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="vendor"
                value={vendor}
                onChange={handleInvoiceVendor}
                inputRef={register({
                  required: 'This field is required',
                })}
              />
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
                ref={register({
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
                ref={register({
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
    </div>
  );
};

export default CreateInvoice;
