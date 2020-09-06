import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetChartOfAccounts } from './ChartAccountsActions';

const ChartAccounts = () => {
  const { accounts } = useSelector((state) => state.ChartAccountsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetChartOfAccounts());
  }, []);

  return (
    <div>
      <h1>Chart of Accounts</h1>
      {accounts.map(
        ({
          accountId,
          accountCode,
          accountName,
          debitBalance,
          creditBalance,
          transactions,
        }) => (
          <React.Fragment>
            <h3>{accountCode}</h3>
            <h3>{accountName}</h3>
            <h3>
              {
                (debitBalance = transactions.reduce(
                  (a, b) => a + b.transactionDebit,
                  0,
                ))
              }
            </h3>
            <h3>
              {
                (creditBalance = transactions.reduce(
                  (a, b) => a + b.transactionCredit,
                  0,
                ))
              }
            </h3>
            <h3>Balance: {debitBalance - creditBalance}</h3>
          </React.Fragment>
        ),
      )}
    </div>
  );
};

export default ChartAccounts;
