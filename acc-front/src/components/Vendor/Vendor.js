import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetAllVendors } from './VendorActions';

const Vendor = () => {
  const { allVendors } = useSelector((state) => state.VendorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetAllVendors());
  }, []);

  return (
    <div>
      <h1>Vendors</h1>
      {allVendors.map(
        ({ vendorName, vendorAddress, vendorDebit, vendorCredit }) => (
          <React.Fragment>
            <h3>{vendorName}</h3>
            <h3>{vendorAddress}</h3>
            <h3>{vendorDebit}</h3>
            <h3>{vendorCredit}</h3>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Vendor;
