import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  requestCreateVendor,
  inputVendorName,
  inputVendorAddres,
} from './CreateVendorActions';

const CreateVendor = () => {
  const { vendorName, vendorAddress, vendorDebit, vendorCredit } = useSelector(
    (state) => state.CreateVendorReducer
  );
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const handleInputVendorName = (e) => {
    dispatch(inputVendorName(e.target.value));
  };

  const handleInputVendorAddress = (e) => {
    dispatch(inputVendorAddres(e.target.value));
  };

  const handleSubmitForm = (e) => {
    // e.preventDefault();
    dispatch(requestCreateVendor());
  };

  return (
    <div>
      <h1>Create Vendor</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="vendorName">Vendor Name</label>
        <input
          type="text"
          name="vendorName"
          value={vendorName}
          onChange={handleInputVendorName}
          ref={register({
            required: true,
            minLength: 4,
          })}
        />
        {errors.name && errors.name.type === 'required' && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <span>Must be at least 4 char</span>
        )}
        <label htmlFor="vendorAddress">Vendor Address</label>
        <input
          type="text"
          name="vendorAddress"
          value={vendorAddress}
          onChange={handleInputVendorAddress}
        />
        <button type={'submit'}>Save</button>
      </form>
    </div>
  );
};

export default CreateVendor;
