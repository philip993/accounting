import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
// Style
import './CreateVendorStyle.scss';
// Redux Actions
import {
  requestCreateVendor,
  inputVendorName,
  inputVendorAddres,
  inputVendorBankAccount,
  inputVendorTaxNumber,
} from './CreateVendorActions';
// Material Ui
import {
  InputBase,
  FormGroup,
  FormLabel,
  FormHelperText,
  Button,
} from '@material-ui/core';

const CreateVendor = () => {
  const {
    vendorName,
    vendorAddress,
    vendorBankAccount,
    vendorTaxNumber,
    vendorDebit,
    vendorCredit,
  } = useSelector((state) => state.CreateVendorReducer);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, message, control } = useForm();

  const handleInputVendorName = (e) => {
    dispatch(inputVendorName(e.target.value));
  };

  const handleInputVendorAddress = (e) => {
    dispatch(inputVendorAddres(e.target.value));
  };

  const handleInputVendorBankAccount = (e) => {
    dispatch(inputVendorBankAccount(e.target.value));
  };

  const handleInputVendorTaxNumber = (e) => {
    dispatch(inputVendorTaxNumber(e.target.value));
  };

  const handleSubmitForm = (e) => {
    // e.preventDefault();
    dispatch(requestCreateVendor());
  };

  return (
    <div className="createVendor">
      <h1>Create Vendor</h1>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="createVendorForm"
      >
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Vendor Name</FormLabel>
          <Controller
            control={control}
            name="vendorName"
            render={({ onChange, value, name, message }) => (
              <InputBase
                name="vendorName"
                className="formInput"
                value={vendorName}
                onChange={handleInputVendorName}
                inputRef={register({
                  required: 'This field is required!',
                  minLength: {
                    value: 4,
                    message: 'Must be at least 4 chars...',
                  },
                })}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.vendorName && errors.vendorName.message}
          </FormHelperText>
        </FormGroup>

        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Vendor Address</FormLabel>
          <Controller
            control={control}
            name="vendorAddress"
            render={({ onChange, value, name, message }) => (
              <InputBase
                name="vendorAddress"
                className="formInput"
                value={vendorAddress}
                onChange={handleInputVendorAddress}
                inputRef={register({
                  required: 'This field is required!',
                  minLength: {
                    value: 4,
                    message: 'Must be at least 4 chars...',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Field cannot be longer than 50 chars..',
                  },
                })}
              />
            )}
          />
          <FormHelperText error className="formHelperText">
            {errors.vendorAddress && errors.vendorAddress.message}
          </FormHelperText>
        </FormGroup>

        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Bank Account</FormLabel>
          <Controller
            control={control}
            name="vendorBankAccount"
            render={({ onChange, value, name, message }) => (
              <InputBase
                name="vendorBankAccount"
                className="formInput"
                value={vendorBankAccount}
                onChange={handleInputVendorBankAccount}
                inputRef={register({
                  required: 'This field is required!',
                  minLength: {
                    value: 15,
                    message: 'Must be at least 15 chars...',
                  },
                  maxLength: {
                    value: 18,
                    message: 'Field cannot be longer than 18 chars..',
                  },

                  pattern: {
                    value: /^([0-9]{3}-[0-9]{10}-[0-9]{2})|([0-9]{15})$/,
                    message: 'Not matching pattern',
                  },
                })}
              />
            )}
          />
          <FormHelperText error className="formHelperText">
            {errors.vendorBankAccount && errors.vendorBankAccount.message}
          </FormHelperText>
        </FormGroup>

        <FormGroup className="formGroup">
          <FormLabel className="formLabel">Tax Number</FormLabel>
          <Controller
            control={control}
            name="vendorTaxNumber"
            render={({ onChange, value, name, message }) => (
              <InputBase
                name="vendorTaxNumber"
                className="formInput"
                value={vendorTaxNumber}
                onChange={handleInputVendorTaxNumber}
                inputRef={register({
                  required: 'This field is required!',
                  minLength: {
                    value: 12,
                    message: 'Must be at least 12 chars...',
                  },
                  maxLength: {
                    value: 12,
                    message: 'Field cannot be longer than 12 chars..',
                  },

                  pattern: {
                    value: /^\b([MK][A-Z])[0-9]{10}$/,
                    message: 'Not matching pattern',
                  },
                })}
              />
            )}
          />
          <FormHelperText error className="formHelperText">
            {errors.vendorTaxNumber && errors.vendorTaxNumber.message}
          </FormHelperText>
        </FormGroup>
        <FormGroup className="formGroupButton">
          <Button type={'submit'} className="saveButton">
            Save
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default CreateVendor;
