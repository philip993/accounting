import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Style
import './DetailAccountReportStyle.scss';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import {
  requestGetDetailsAccount,
  inputFilterAccountCode,
  inputFilterStartDate,
  inputFilterEndDate,
} from './DetailAccountReportActions';
// Material Ui
import { InputBase } from '@material-ui/core';
import { requestGetTransactions } from '../Journal/JournalActions';

const DetailAccountReport = () => {
  const {
    accountReport,
    accountFilter,
    startDateFilter,
    endDateFilter,
  } = useSelector((state) => state.DetailAccountReportReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  //   const [accountFilter, setAccountFilter] = useState('');
  //   const [startDateFilter, setStartDateFilter] = useState('')
  //   const [endDateFilter, setEndDateFilter] = useState('')

  const handleAccountFilter = (e) => {
    dispatch(inputFilterAccountCode(e.target.value));
  };

  const handleStartDateFilter = (e) => {
    dispatch(inputFilterStartDate(e.target.value));
  };

  const handleEndDateFilter = (e) => {
    dispatch(inputFilterEndDate(e.target.value));
  };

  const handleSearchAccount = (e) => {
    e.preventDefault();
    dispatch(requestGetDetailsAccount());
  };

  return (
    <div className="detailAccountReport">
      <h1>Report</h1>
      <form onSubmit={handleSearchAccount}>
        <InputBase
          type="text"
          value={accountFilter}
          onChange={handleAccountFilter}
        />
        <InputBase
          type="date"
          value={startDateFilter}
          onChange={handleStartDateFilter}
        />
        <InputBase
          type="date"
          value={endDateFilter}
          onChange={handleEndDateFilter}
        />
        <button type="submit">Search</button>
      </form>

      {accountReport.map(
        ({ accountId, accountName, accountDebit, accountCredit }) => (
          <React.Fragment>
            <h3>{accountId}</h3>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default DetailAccountReport;
