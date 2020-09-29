import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './AppStyle.scss';
import ChartAccounts from '../ChartAccounts/ChartAccounts';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Journal from '../Journal/Journal';
import Vendor from '../Vendor/Vendor';
import CreateVendor from '../CreateVendor/CreateVendor';
import Invoice from '../Invoice/Invoice';
import CreateInvoice from '../CreateInvoice/CreateInvoice';
import DetailInvoice from '../DetailInvoice/DetailInvoice';
import VendorHistory from '../Vendor/VendorHistory';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chart" component={ChartAccounts} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/vendors" component={Vendor} />
        <Route exact path="/createvendor" component={CreateVendor} />
        <Route exact path="/invoices" component={Invoice} />
        <Route exact path="/createinvoice" component={CreateInvoice} />
        <Route
          exact
          path="/invoices/invoicedetails"
          component={DetailInvoice}
        />
        <Route exact path="/vendors/vendorhistory" component={VendorHistory} />
      </Switch>
    </div>
  );
};

export default App;
