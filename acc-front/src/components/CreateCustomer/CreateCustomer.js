import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
// Style
import './CreateCustomerStyle.scss';
// Redux Actions
import {
  requestCreateCustomer,
  inputCustomerName,
  inputCustomerAddres,
  inputCustomerBankAccount,
  inputCustomerTaxNumber,
  inputCustomerCity,
  inputCustomerState,
  inputCustomerZipcode,
  inputCustomerType,
  inputCustomerTelephone,
  inputCustomerEmail,
  inputCustomerLanguage,
  inputCustomerCurrency,
} from '././CreateCustomerActions';
// Material Ui
import {
  InputBase,
  FormGroup,
  FormLabel,
  FormHelperText,
  Button,
  Typography,
} from '@material-ui/core';

const CreateCustomer = () => {
  const {
    customerName,
    customerAddress,
    customerBankAccount,
    customerTaxNumber,
    customerCity,
    customerState,
    customerZipcode,
    customerType,
    customerTelephone,
    customerEmail,
    customerLanguage,
    customerCurrency,
    customerDebit,
    customerCredit,
  } = useSelector((state) => state.CreateCustomerReducer);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, message, control } = useForm();

  const handleInputCustomerName = (e) => {
    dispatch(inputCustomerName(e.target.value));
  };

  const handleInputCustomerAddress = (e) => {
    dispatch(inputCustomerAddres(e.target.value));
  };

  const handleInputCustomerBankAccount = (e) => {
    dispatch(inputCustomerBankAccount(e.target.value));
  };

  const handleInputCustomerTaxNumber = (e) => {
    dispatch(inputCustomerTaxNumber(e.target.value));
  };

  const handleInputCustomerCity = (e) => {
    dispatch(inputCustomerCity(e.target.value));
  };

  const handleInputCustomerState = (e) => {
    dispatch(inputCustomerState(e.target.value));
  };

  const handleInputCustomerZipcode = (e) => {
    dispatch(inputCustomerZipcode(e.target.value));
  };

  const handleInputCustomerType = (e) => {
    dispatch(inputCustomerType(e.target.value));
  };

  const handleInputCustomerTelephone = (e) => {
    dispatch(inputCustomerTelephone(e.target.value));
  };

  const handleInputCustomerEmail = (e) => {
    dispatch(inputCustomerEmail(e.target.value));
  };

  const handleInputCustomerLanguage = (e) => {
    dispatch(inputCustomerLanguage(e.target.value));
  };

  const handleInputCustomerCurrency = (e) => {
    dispatch(inputCustomerCurrency(e.target.value));
  };

  const handleSubmitForm = (e) => {
    // e.preventDefault();
    dispatch(requestCreateCustomer());
  };

  return (
    <div className="createCustomer">
      <h1>Create Customer</h1>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="createCustomerForm"
      >
        <Typography variant="h5" className="title">
          Basic Information
        </Typography>
        <div className="one">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Name</FormLabel>
            <Controller
              control={control}
              name="customerName"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerName"
                  className="formInput"
                  value={customerName}
                  onChange={handleInputCustomerName}
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
              {errors.customerName && errors.customerName.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Address</FormLabel>
            <Controller
              control={control}
              name="customerAddress"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerAddress"
                  className="formInput"
                  value={customerAddress}
                  onChange={handleInputCustomerAddress}
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
              {errors.customerAddress && errors.customerAddress.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Type</FormLabel>
            <Controller
              control={control}
              name="customerType"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerType"
                  className="formInput"
                  value={customerType}
                  onChange={handleInputCustomerType}
                  inputRef={register({
                    required: 'This field is required!',
                    minLength: {
                      value: 2,
                      message: 'Must be at least 4 chars...',
                    },
                    maxLength: {
                      value: 10,
                      message: 'Field cannot be longer than 50 chars..',
                    },
                  })}
                />
              )}
            />
            <FormHelperText error className="formHelperText">
              {errors.customerType && errors.customerType.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">City</FormLabel>
            <Controller
              control={control}
              name="customerCity"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerCity"
                  className="formInput"
                  value={customerCity}
                  onChange={handleInputCustomerCity}
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
              {errors.customerCity && errors.customerCity.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">State</FormLabel>
            <Controller
              control={control}
              name="customerState"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerState"
                  className="formInput"
                  value={customerState}
                  onChange={handleInputCustomerState}
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
              {errors.customerState && errors.customerState.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Zip Code</FormLabel>
            <Controller
              control={control}
              name="customerZipcode"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerZipcode"
                  className="formInput"
                  value={customerZipcode}
                  onChange={handleInputCustomerZipcode}
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
              {errors.customerZipcode && errors.customerZipcode.message}
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
              name="customerTelephone"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerTelephone"
                  className="formInput"
                  value={customerTelephone}
                  onChange={handleInputCustomerTelephone}
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
              {errors.customerTelephone && errors.customerTelephone.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Email</FormLabel>
            <Controller
              control={control}
              name="customerEmail"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerEmail"
                  className="formInput"
                  value={customerEmail}
                  onChange={handleInputCustomerEmail}
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
              {errors.customerEmail && errors.customerEmail.message}
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
              name="customerBankAccount"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerBankAccount"
                  className="formInput"
                  value={customerBankAccount}
                  onChange={handleInputCustomerBankAccount}
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
              {errors.customerBankAccount && errors.customerBankAccount.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Tax Number</FormLabel>
            <Controller
              control={control}
              name="customerTaxNumber"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerTaxNumber"
                  className="formInput"
                  value={customerTaxNumber}
                  onChange={handleInputCustomerTaxNumber}
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
              {errors.customerTaxNumber && errors.customerTaxNumber.message}
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
              name="customerLanguage"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerLanguage"
                  className="formInput"
                  value={customerLanguage}
                  onChange={handleInputCustomerLanguage}
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
              {errors.customerLanguage && errors.customerLanguage.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Currency</FormLabel>
            <Controller
              control={control}
              name="customerCurrency"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  name="customerCurrency"
                  className="formInput"
                  value={customerCurrency}
                  onChange={handleInputCustomerCurrency}
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
              {errors.customerCurrency && errors.customerCurrency.message}
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

export default CreateCustomer;
