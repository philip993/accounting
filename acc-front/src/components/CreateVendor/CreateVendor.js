import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const CreateVendor = () => {
  const { vendorName, vendorAddress, vendorDebit, vendorCredit } = useSelector(
    (state) => state.CreateVendorReducer
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h1>Create Vendor</h1>
    </div>
  );
};

export default CreateVendor;
