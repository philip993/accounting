import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Style
import './DetailAccountReportStyle.scss';
// Accounting
import { formatMoney } from 'accounting';
// Moment
import Moment from 'react-moment';
// React Router Dom
import { useHistory } from 'react-router-dom';
// React Hook Form
import { useForm, Controller } from 'react-hook-form';
// Redux Actions
import {
  requestGetDetailsAccount,
  inputFilterAccountCode,
  inputFilterStartDate,
  inputFilterEndDate,
  resetSearchFields,
} from './DetailAccountReportActions';
import { requestGetChartOfAccounts } from '../ChartAccounts/ChartAccountsActions';
// Material Ui
import {
  InputBase,
  FormGroup,
  FormLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  Card,
  Typography,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const DetailAccountReport = () => {
  const {
    accountReport,
    accountFilter,
    startDateFilter,
    endDateFilter,
    accounts,
  } = useSelector((state) => ({
    ...state.DetailAccountReportReducer,
    ...state.ChartAccountsReducer,
  }));
  const dispatch = useDispatch();
  const history = useHistory();
  let debit;
  let credit;

  const { handleSubmit, control, message, register, errors } = useForm();

  const [clicked, setClicked] = useState(false);

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
    dispatch(requestGetDetailsAccount());
    setClicked(true);
  };

  const handleNewSearch = () => {
    dispatch(resetSearchFields());
    setClicked(false);
  };

  useEffect(() => {
    dispatch(requestGetChartOfAccounts());
  }, []);

  return (
    <div className="detailAccountReport">
      <form
        onSubmit={handleSubmit(handleSearchAccount)}
        className="detailAccountReportForm"
        hidden={clicked}
      >
        <h1>
          Report {accountFilter ? `- account code: ${accountFilter - 1}` : '?'}
        </h1>
        <div className="one">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Account</FormLabel>
            <Controller
              control={control}
              name="accountFilter"
              render={({ onChange, value, message, name }) => (
                <Select
                  disabled={clicked}
                  name="accountFilter"
                  className="select"
                  value={accountFilter}
                  onChange={handleAccountFilter}
                  inputRef={register({
                    required: 'This field is required!',
                    minLength: {
                      value: 1,
                      message: 'Minimum length of one character..',
                    },
                  })}
                >
                  {accounts.map(({ accountId, accountCode, accountName }) => (
                    <MenuItem
                      key={accountId}
                      value={accountId}
                      className="menuItem"
                    >
                      {accountCode} - {accountName}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.accountFilter && errors.accountFilter.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Start Date</FormLabel>

            <Controller
              control={control}
              name="startDateFilter"
              render={({ onChange, value, message, name }) => (
                <InputBase
                  disabled={clicked}
                  type="date"
                  className="inputBase"
                  value={startDateFilter}
                  onChange={handleStartDateFilter}
                  inputRef={register({
                    required: 'This field is required!',
                  })}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.startDateFilter && errors.startDateFilter.message}
            </FormHelperText>
          </FormGroup>

          <FormGroup className="formGroup">
            <FormLabel className="formLabel">End Date</FormLabel>
            <Controller
              control={control}
              name="endDateFilter"
              render={({ onChange, value, message, name }) => (
                <InputBase
                  disabled={clicked}
                  type="date"
                  className="inputBase"
                  value={endDateFilter}
                  onChange={handleEndDateFilter}
                  inputRef={register({
                    required: 'This field is required!',
                  })}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.endDateFilter && errors.endDateFilter.message}
            </FormHelperText>
          </FormGroup>
        </div>

        <FormGroup className="formGroup">
          <Button type="submit" disabled={clicked} className="saveButton">
            Search
          </Button>
        </FormGroup>
      </form>

      <div className="two" hidden={!clicked}>
        <h1>Results</h1>
        <Card className="card">
          {clicked ? (
            <CardContent className="cardContent">
              <div className="left">
                <Typography className="typography">
                  Account: {accountFilter - 1}
                </Typography>
                <Typography className="typography">
                  From: {startDateFilter}
                </Typography>
                <Typography className="typography">
                  To: {endDateFilter}
                </Typography>
              </div>
              <div className="right">
                <Button onClick={handleNewSearch} className="button">
                  Clear <ClearIcon className="icon" />
                </Button>
              </div>
            </CardContent>
          ) : (
            ''
          )}

          <CardContent className="card">
            {accountReport.map(
              (
                {
                  accountId,
                  accountName,
                  accountDebit,
                  accountCredit,
                  transactions,
                },
                index
              ) => (
                <Table className="table">
                  <TableHead className="tableHead">
                    <TableRow className="tableRow">
                      <TableCell className="tableCell">#</TableCell>
                      <TableCell className="tableCell">Date</TableCell>
                      <TableCell className="tableCell">Desc.</TableCell>
                      <TableCell className="tableCell">Debit</TableCell>
                      <TableCell className="tableCell">Credit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="tableBody">
                    {transactions
                      .filter(
                        (tran) =>
                          tran.transactionDate.split('T').shift() >=
                            startDateFilter &&
                          tran.transactionDate.split('T').shift() <=
                            endDateFilter
                      )
                      .map((tr, indx) => (
                        <TableRow className="tableRow">
                          <TableCell className="tableCell">
                            {tr.transactionId}
                          </TableCell>
                          <TableCell className="tableCell">
                            {tr.transactionDate}
                          </TableCell>
                          <TableCell className="tableCell">
                            {tr.transactionDescription}
                          </TableCell>
                          <TableCell className="tableCell">
                            {formatMoney(tr.transactionDebit)}
                          </TableCell>
                          <TableCell className="tableCell">
                            {formatMoney(tr.transactionCredit)}
                          </TableCell>
                        </TableRow>
                      ))}
                    <TableRow className="tableRowSubtotal">
                      <TableCell className="tableCell" colSpan={3}>
                        Subtotal
                      </TableCell>
                      <TableCell className="tableCell">
                        {formatMoney(
                          (debit = transactions
                            .filter(
                              (tran) =>
                                tran.transactionDate.split('T').shift() >=
                                  startDateFilter &&
                                tran.transactionDate.split('T').shift() <=
                                  endDateFilter
                            )
                            .reduce((a, b) => a + b.transactionDebit, 0))
                        )}
                      </TableCell>
                      <TableCell className="tableCell">
                        {formatMoney(
                          (credit = transactions
                            .filter(
                              (tran) =>
                                tran.transactionDate.split('T').shift() >=
                                  startDateFilter &&
                                tran.transactionDate.split('T').shift() <=
                                  endDateFilter
                            )
                            .reduce((a, b) => a + b.transactionCredit, 0))
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow className="tableRowTotal">
                      <TableCell className="tableCell" colSpan={4}>
                        Total
                      </TableCell>
                      <TableCell className="tableCell">
                        {formatMoney(debit - credit)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              )
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DetailAccountReport;
