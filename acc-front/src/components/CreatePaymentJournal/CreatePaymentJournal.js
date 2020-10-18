import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Style
import './CreatePaymentJournalStyle.scss';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
// Redux
import {
  inputPaymentJournalDate,
  inputPaymentJournalDescription,
  inputPaymentJournalUser,
  requestCreatePaymentJournal,
} from './CreatePaymentJournalActions';
import { requestCreateTransactions } from '../Transactions/TransactionsActions';
// React Components
import Transactions from '../Transactions/Transactions';
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
import { requestGetAllCustomers } from '../Customer/CustomerActions';
import { requestGetAllVendors } from '../Vendor/VendorActions';

const CreatePaymentJournal = () => {
  const {
    paymentJournalDescription,
    paymentJournalDate,
    allCustomers,
    allVendors,
  } = useSelector((state) => ({
    ...state.CreatePaymentJournalReducer,
    ...state.CustomerReducer,
    ...state.VendorReducer,
  }));
  const dispatch = useDispatch();
  const { register, handleSubmit, message, control, errors } = useForm();

  const [isType, setIsType] = useState('');

  const handlePaymentJournalDescription = (e) => {
    dispatch(inputPaymentJournalDescription(e.target.value));
  };

  const handlePaymentJournalDate = (e) => {
    dispatch(inputPaymentJournalDate(e.target.value));
  };

  const handleSelectUserType = (e) => {
    dispatch(inputPaymentJournalUser(e.target.value));
  };

  const submitForm = async (e) => {
    await dispatch(requestCreatePaymentJournal());
    await dispatch(requestCreateTransactions());
  };

  useEffect(() => {
    dispatch(requestGetAllCustomers());
    dispatch(requestGetAllVendors());
  }, []);

  console.log(isType);
  return (
    <div className="createPaymentJournal">
      <h1>Create Payment Journal</h1>
      <form
        className="createPaymentJournalForm"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="one">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Select Type</FormLabel>
            <Controller
              control={control}
              name="userType"
              render={({ onChange, value, name, message }) => (
                <Select
                  className="formInput"
                  name="userType"
                  value={isType}
                  onChange={(e) => setIsType(e.target.value)}
                  inputRef={register({
                    required: 'This field is required',
                  })}
                >
                  <MenuItem value="vendor">Vendor</MenuItem>
                  <MenuItem value="customer">Customer</MenuItem>
                </Select>
              )}
            />

            {/* <FormHelperText className="formHelperText" error>
              {errors.paymentJournalDescription &&
                errors.paymentJournalDescription.message}
            </FormHelperText> */}
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">User</FormLabel>
            <Controller
              control={control}
              name="user"
              render={({ onChange, value, name, message }) => (
                <Select
                  className="formInput"
                  name="user"
                  value={''}
                  onChange={handleSelectUserType}
                  inputRef={register({
                    required: 'This field is required',
                  })}
                >
                  {isType === ''
                    ? ''
                    : isType === 'vendor'
                    ? allVendors.map(({ vendorId, vendorName }) => (
                        <MenuItem value={vendorId}>{vendorName}</MenuItem>
                      ))
                    : allCustomers.map(({ customerId, customerName }) => (
                        <MenuItem value={customerId}>{customerName}</MenuItem>
                      ))}
                </Select>
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.user && errors.user.message}
            </FormHelperText>
          </FormGroup>
        </div>
        <div className="two">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Date</FormLabel>
            <Controller
              control={control}
              name="paymentJournalDate"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="paymentJournalDate"
                  type="date"
                  value={paymentJournalDate}
                  onChange={handlePaymentJournalDate}
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
              {errors.paymentJournalDate && errors.paymentJournalDate.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Description</FormLabel>
            <Controller
              control={control}
              name="paymentJournalDescription"
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="paymentJournalDescription"
                  value={paymentJournalDescription}
                  onChange={handlePaymentJournalDescription}
                  inputRef={register({
                    required: 'This field is required!',
                  })}
                />
              )}
            />

            <FormHelperText className="formHelperText" error>
              {errors.paymentJournalDescription &&
                errors.paymentJournalDescription.message}
            </FormHelperText>
          </FormGroup>
        </div>

        <Transactions />

        <div className="four">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Total</FormLabel>
            <Typography className="formTotal">
              {/* {
                (invoiceTotal = transactionsRow.reduce(
                  (a, b) => a + b.transactionsDebit,
                  0
                ))
              }{' '} */}
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

export default CreatePaymentJournal;
