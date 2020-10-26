import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Style
import './VendorAnalyticsStyle.scss';
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
  inputFilterVendorCode,
  requestGetVendorAnalytics,
  resetSearchFields,
} from './VendorAnalyticsActions';
import { requestGetAllVendors } from '../Vendor/VendorActions';
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

const VendorAnalytics = () => {
  const {
    vendorAnalytics,
    vendorFilter,
    startDateFilter,
    endDateFilter,
    allVendors,
  } = useSelector((state) => ({
    ...state.VendorAnalyticsReducer,
    ...state.VendorReducer,
  }));
  const dispatch = useDispatch();
  const history = useHistory();
  let debit;
  let credit;

  const { handleSubmit, control, message, register, errors } = useForm();

  const [clicked, setClicked] = useState(false);

  const handleVendorFilter = (e) => {
    dispatch(inputFilterVendorCode(e.target.value));
  };

  const handleStartDateFilter = (e) => {
    dispatch(inputFilterStartDate(e.target.value));
  };

  const handleEndDateFilter = (e) => {
    dispatch(inputFilterEndDate(e.target.value));
  };

  const handleSearchAccount = (e) => {
    dispatch(requestGetVendorAnalytics());
    setClicked(true);
  };

  const handleNewSearch = () => {
    dispatch(resetSearchFields());
    setClicked(false);
  };

  useEffect(() => {
    dispatch(requestGetAllVendors());
  }, []);

  return (
    <div className="vendorAnalytics">
      <form
        onSubmit={handleSubmit(handleSearchAccount)}
        className="vendorAnalyticsForm"
        hidden={clicked}
      >
        <h1>Report {vendorFilter ? `- account code: ${vendorFilter}` : '?'}</h1>
        <div className="one">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">Vendor</FormLabel>
            <Controller
              control={control}
              name="vendorFilter"
              render={({ onChange, value, message, name }) => (
                <Select
                  disabled={clicked}
                  name="vendorFilter"
                  className="select"
                  value={vendorFilter}
                  onChange={handleVendorFilter}
                  inputRef={register({
                    required: 'This field is required!',
                    minLength: {
                      value: 1,
                      message: 'Minimum length of one character..',
                    },
                  })}
                >
                  {allVendors.map(({ vendorId, vendorName }) => (
                    <MenuItem
                      key={vendorId}
                      value={vendorId}
                      className="menuItem"
                    >
                      {vendorName}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.vendorFilter && errors.vendorFilter.message}
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
                  Vendor: {vendorFilter}
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
            {vendorAnalytics.map(({ invoice, vendorlines }, index) => (
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
                  {vendorlines
                    .filter(
                      (inv) =>
                        inv.transactionDate.split('T').shift() >=
                          startDateFilter &&
                        inv.transactionDate.split('T').shift() <= endDateFilter
                    )
                    .map((invs, indx) => (
                      <TableRow className="tableRow">
                        <TableCell className="tableCell">
                          {invs.transactionId}
                        </TableCell>
                        <TableCell className="tableCell">
                          {invs.transactionDate}
                        </TableCell>
                        <TableCell className="tableCell">
                          {invs.transactionInvoiceFK}
                        </TableCell>
                        <TableCell className="tableCell">
                          {invs.transactionJournalFK}
                        </TableCell>
                        <TableCell className="tableCell">
                          {/* {formatMoney(invs.)} */}
                          {vendorlines
                            .filter(
                              (tr) =>
                                tr.transactionInvoiceFK ===
                                invs.transactionInvoiceFK
                            )
                            .reduce((a, b) => a + b.transactionDebit, 0)}
                        </TableCell>
                        <TableCell className="tableCell">
                          {/* {formatMoney(invs.invoiceTotal)}
                           */}
                          {invs.transactionCredit}
                        </TableCell>
                      </TableRow>
                    ))}
                  <TableRow className="tableRowSubtotal">
                    <TableCell className="tableCell" colSpan={3}>
                      Subtotal
                    </TableCell>
                    <TableCell className="tableCell">
                      {formatMoney(
                        (debit = invoice
                          .filter(
                            (tran) =>
                              tran.invoiceDate.split('T').shift() >=
                                startDateFilter &&
                              tran.invoiceDate.split('T').shift() <=
                                endDateFilter
                          )
                          .reduce((a, b) => a + b.invoiceTotal, 0))
                      )}
                    </TableCell>
                    {/* <TableCell className="tableCell">
                      {formatMoney(
                        (credit = invoice
                          .filter(
                            (inv) =>
                              inv.invoiceDate.split('T').shift() >=
                                startDateFilter &&
                              inv.invoiceDate.split('T').shift() <=
                                endDateFilter
                          )
                          .reduce((a, b) => a + b.invoiceCredit, 0))
                      )}
                    </TableCell> */}
                  </TableRow>
                  <TableRow className="tableRowTotal">
                    <TableCell className="tableCell" colSpan={4}>
                      Total
                    </TableCell>
                    <TableCell className="tableCell">
                      {/* {formatMoney(debit - credit)} */}
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

export default VendorAnalytics;
