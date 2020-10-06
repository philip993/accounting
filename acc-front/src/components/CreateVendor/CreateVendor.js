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
  inputVendorCity,
  inputVendorZipCode,
  inputVendorTelephone,
  inputVendorEmail,
  inputVendorLanguage,
  inputVendorCurrency,
} from './CreateVendorActions';
// Material Ui
import {
  InputBase,
  FormGroup,
  FormLabel,
  FormHelperText,
  Button,
  Typography,
} from '@material-ui/core';

const CreateVendor = () => {
  const {
    vendorName,
    vendorAddress,
    vendorBankAccount,
    vendorTaxNumber,
    vendorCity,
    vendorZipCode,
    vendorTelephone,
    vendorEmail,
    vendorLanguage,
    vendorCurrency,
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

  const handleInputVendorCity = (e) => {
    dispatch(inputVendorCity(e.target.value));
  };

  const handleInputVendorZipCode = (e) => {
    dispatch(inputVendorZipCode(e.target.value));
  };

  const handleInputVendorTelephone = (e) => {
    dispatch(inputVendorTelephone(e.target.value));
  };

  const handleInputVendorEmail = (e) => {
    dispatch(inputVendorEmail(e.target.value));
  };

  const handleInputVendorLanguage = (e) => {
    dispatch(inputVendorLanguage(e.target.value));
  };

  const handleInputVendorCurrency = (e) => {
    dispatch(inputVendorCurrency(e.target.value));
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
        <Typography variant="h5" className="title">
          Basic Information
        </Typography>
        <div className="one">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Name</FormLabel>
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
            <FormLabel className="formLabel">Address</FormLabel>
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
            <FormLabel className="formLabel">City</FormLabel>
            <Controller
              control={control}
              name="vendorCity"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="vendorCity"
                  className="formInput"
                  value={vendorCity}
                  onChange={handleInputVendorCity}
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
              {errors.vendorCity && errors.vendorCity.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Zip Code</FormLabel>
            <Controller
              control={control}
              name="vendorZipCode"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="vendorZipCode"
                  className="formInput"
                  value={vendorZipCode}
                  onChange={handleInputVendorZipCode}
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
              {errors.vendorZipCode && errors.vendorZipCode.message}
            </FormHelperText>
          </FormGroup>
        </div>

        <Typography variant="h5" className="title">
          Contact Information
        </Typography>
        <div className="two">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Telehpone</FormLabel>
            <Controller
              control={control}
              name="vendorTelephone"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="vendorTelephone"
                  className="formInput"
                  value={vendorTelephone}
                  onChange={handleInputVendorTelephone}
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
              {errors.vendorTelephone && errors.vendorTelephone.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Email</FormLabel>
            <Controller
              control={control}
              name="vendorEmail"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="vendorEmail"
                  className="formInput"
                  value={vendorEmail}
                  onChange={handleInputVendorEmail}
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
              {errors.vendorEmail && errors.vendorEmail.message}
            </FormHelperText>
          </FormGroup>
        </div>

        <Typography variant="h5" className="title">
          Tax & Payment Information
        </Typography>
        <div className="three">
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
        </div>

        <Typography variant="h5" className="title">
          Localization Information
        </Typography>
        <div className="four">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Language</FormLabel>
            <Controller
              control={control}
              name="vendorLanguage"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="vendorLanguage"
                  className="formInput"
                  value={vendorLanguage}
                  onChange={handleInputVendorLanguage}
                  inputRef={register({
                    required: 'This field is required!',
                    minLength: {
                      value: 2,
                      message: 'Must be at least 2 chars...',
                    },
                  })}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.vendorLanguage && errors.vendorLanguage.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Currency</FormLabel>
            <Controller
              control={control}
              name="vendorCurrency"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="vendorCurrency"
                  className="formInput"
                  value={vendorCurrency}
                  onChange={handleInputVendorCurrency}
                  inputRef={register({
                    required: 'This field is required!',
                    minLength: {
                      value: 1,
                      message: 'Must be one char...',
                    },
                    maxLength: {
                      value: 1,
                      message: 'Must be one char maximum..',
                    },
                    pattern: {
                      value: /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/,
                      message: 'Must be a valid Currency sign.',
                    },
                  })}
                />
              )}
            />
            <FormHelperText error className="formHelperText">
              {errors.vendorCurrency && errors.vendorCurrency.message}
            </FormHelperText>
          </FormGroup>
        </div>

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
