import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Style
import './CustomerAnalyticsStyle.scss';
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
  inputFilterEndDate,
  inputFilterStartDate,
  inputFilterCustomerCode,
  requestGetCustomerAnalytics,
  resetSearchFields,
} from './CustomerAnalyticsActions';
import { requestGetAllCustomers } from '../Customer/CustomerActions';
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

const CustomerAnalytics = () => {
  const {
    customerAnalytics,
    customerFilter,
    startDateFilter,
    endDateFilter,
    allCustomers,
  } = useSelector((state) => ({
    ...state.CustomerAnalyticsReducer,
    ...state.CustomerReducer,
  }));
  const dispatch = useDispatch();
  const history = useHistory();
  let debit;
  let credit;

  const { handleSubmit, control, message, register, errors } = useForm();

  const [clicked, setClicked] = useState(false);

  const handleCustomerFilter = (e) => {
    dispatch(inputFilterCustomerCode(e.target.value));
  };

  const handleStartDateFilter = (e) => {
    dispatch(inputFilterStartDate(e.target.value));
  };

  const handleEndDateFilter = (e) => {
    dispatch(inputFilterEndDate(e.target.value));
  };

  const handleSearchAccount = (e) => {
    dispatch(requestGetCustomerAnalytics());
    setClicked(true);
  };

  const handleNewSearch = () => {
    dispatch(resetSearchFields());
    setClicked(false);
  };

  useEffect(() => {
    dispatch(requestGetAllCustomers());
  }, []);

  return (
    <div className="customerAnalytics">
      <form
        onSubmit={handleSubmit(handleSearchAccount)}
        className="customerAnalyticsForm"
        hidden={clicked}
      >
        <h1>
          Report {customerFilter ? `- customer code: ${customerFilter}` : '?'}
        </h1>
        <div className="one">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Customer</FormLabel>
            <Controller
              control={control}
              name="customerFilter"
              render={({ onChange, value, message, name }) => (
                <Select
                  disabled={clicked}
                  name="customerFilter"
                  className="select"
                  value={customerFilter}
                  onChange={handleCustomerFilter}
                  inputRef={register({
                    required: 'This field is required!',
                    minLength: {
                      value: 1,
                      message: 'Minimum length of one character..',
                    },
                  })}
                >
                  {allCustomers.map(({ customerId, customerName }) => (
                    <MenuItem
                      key={customerId}
                      value={customerId}
                      className="menuItem"
                    >
                      {customerName}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.customerFilter && errors.customerFilter.message}
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
                  Customer code: {customerFilter}
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
            {customerAnalytics.map(({ saleinvoice, xsales }, index) => (
              <Table className="table">
                <TableHead className="tableHead">
                  <TableRow className="tableRow">
                    <TableCell className="tableCell">#</TableCell>
                    <TableCell className="tableCell">Date</TableCell>
                    <TableCell className="tableCell">Invoice</TableCell>
                    <TableCell className="tableCell">Journal</TableCell>
                    <TableCell className="tableCell">Debit</TableCell>
                    <TableCell className="tableCell">Credit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tableBody">
                  {xsales
                    .filter(
                      (inv) =>
                        inv.transactionDate.split('T').shift() >=
                          startDateFilter &&
                        inv.transactionDate.split('T').shift() <=
                          endDateFilter &&
                        inv.transactionJournalFK !== null
                    )
                    .map((invs, indx) => (
                      <TableRow className="tableRow">
                        <TableCell className="tableCell">
                          {invs.transactionId}
                        </TableCell>
                        <TableCell className="tableCell">
                          {invs.transactionDate}
                        </TableCell>
                        <TableCell className="tableCell"></TableCell>
                        <TableCell className="tableCell">
                          {invs.transactionDescription}
                        </TableCell>
                        <TableCell className="tableCell"></TableCell>
                        <TableCell className="tableCell">
                          {formatMoney(invs.transactionCredit)}
                        </TableCell>
                      </TableRow>
                    ))}
                  {saleinvoice
                    .filter(
                      (inv) =>
                        inv.salesInvoiceDate.split('T').shift() >=
                          startDateFilter &&
                        inv.salesInvoiceDate.split('T').shift() <= endDateFilter
                    )
                    .map((invs, indx) => (
                      <TableRow className="tableRow">
                        <TableCell className="tableCell">
                          {invs.salesInvoiceId}
                        </TableCell>
                        <TableCell className="tableCell">
                          {invs.salesInvoiceDate}
                        </TableCell>
                        <TableCell className="tableCell">
                          {invs.salesInvoiceNumber}
                        </TableCell>
                        <TableCell className="tableCell"></TableCell>
                        <TableCell className="tableCell">
                          {formatMoney(invs.salesInvoiceTotal)}
                        </TableCell>
                        <TableCell className="tableCell"></TableCell>
                      </TableRow>
                    ))}
                  <TableRow className="tableRowSubtotal">
                    <TableCell className="tableCell" colSpan={4}>
                      Subtotal
                    </TableCell>
                    <TableCell className="tableCell">
                      {formatMoney(
                        (debit = saleinvoice
                          .filter(
                            (tran) =>
                              tran.salesInvoiceDate.split('T').shift() >=
                                startDateFilter &&
                              tran.salesInvoiceDate.split('T').shift() <=
                                endDateFilter
                          )
                          .reduce((a, b) => a + b.salesInvoiceTotal, 0))
                      )}
                    </TableCell>
                    <TableCell className="tableCell">
                      {formatMoney(
                        (credit = xsales
                          .filter(
                            (inv) =>
                              inv.transactionDate.split('T').shift() >=
                                startDateFilter &&
                              inv.transactionDate.split('T').shift() <=
                                endDateFilter &&
                              inv.transactionJournalFK !== null
                          )
                          .reduce((a, b) => a + b.transactionDebit, 0))
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
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerAnalytics;
