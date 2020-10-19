import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Style
import './CreatePaymentJournalStyle.scss';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
// Redux
import {
  inputPaymentJournalDate,
  requestCreatePaymentJournal,
} from './CreatePaymentJournalActions';
// React Components
import PaymentTransaction from '../PaymentTransaction/PaymentTransaction';

// Material Ui
import {
  FormGroup,
  FormLabel,
  InputBase,
  FormHelperText,
  Button,
} from '@material-ui/core';
import { requestCreatePayTransactions } from '../PaymentTransaction/PaymentTransactionActions';

const CreatePaymentJournal = () => {
  const { paymentJournalDate } = useSelector((state) => ({
    ...state.CreatePaymentJournalReducer,
    ...state.CustomerReducer,
    ...state.VendorReducer,
  }));
  const dispatch = useDispatch();
  const { register, handleSubmit, message, control, errors } = useForm();

  const [isType, setIsType] = useState('');

  const handlePaymentJournalDate = (e) => {
    dispatch(inputPaymentJournalDate(e.target.value));
  };

  const submitForm = async (e) => {
    await dispatch(requestCreatePaymentJournal());
    await dispatch(requestCreatePayTransactions());
  };

  return (
    <div className="createPaymentJournal">
      <h1>Create Payment Journal</h1>
      <form
        className="createPaymentJournalForm"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="one">
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
        </div>

        {/* <div className="two"> */}
        <PaymentTransaction />
        {/* </div> */}

        <FormGroup className="formGroup">
          <Button className="saveButton" type={'submit'}>
            Post
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default CreatePaymentJournal;
