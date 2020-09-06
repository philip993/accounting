import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetTransactions } from './JournalActions';

const Journal = () => {
  const { transactions } = useSelector((state) => state.JournalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetTransactions());
  }, []);

  return (
    <div>
      <h1>Journal</h1>
      {transactions.map(
        ({
          transactionId,
          transactionFK,
          transactionDescription,
          transactionDebit,
          transactionCredit,
          accounts,
        }) => (
          <React.Fragment>
            <h3>{transactionFK}</h3>
            <h3>{transactionDescription}</h3>
            <h3>{transactionDebit}</h3>
            <h3>{transactionCredit}</h3>
          </React.Fragment>
        ),
      )}
    </div>
  );
};

export default Journal;
