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
import PayablesMenu from '../Menu/PayablesMenu';
import ReceivablesMenu from '../Menu/Receivables';
import GeneralMenu from '../Menu/GeneralMenu';
import HumanResourcesMenu from '../Menu/HumanResourcesMenu';
import { SalesInvoice } from '../SalesInvoice/SalesInvoice';
import Customer from '../Customer/Customer';
import CreateSalesInvoice from '../CreateSalesInvoice/CreateSalesInvoice';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/general/chart" component={ChartAccounts} />
        <Route exact path="/general/journal" component={Journal} />
        <Route exact path="/payables/vendors" component={Vendor} />
        <Route exact path="/payables/createvendor" component={CreateVendor} />
        <Route exact path="/payables/invoices" component={Invoice} />
        <Route exact path="/payables/createinvoice" component={CreateInvoice} />
        <Route
          exact
          path="/payables/invoices/invoicedetails"
          component={DetailInvoice}
        />
        <Route
          exact
          path="/payables/vendors/vendorhistory"
          component={VendorHistory}
        />
        <Route exact path="/payables" component={PayablesMenu} />
        <Route exact path="/receivables" component={ReceivablesMenu} />
        <Route exact path="/general" component={GeneralMenu} />
        <Route exact path="/hr" component={HumanResourcesMenu} />
        <Route
          exact
          path="/receivables/salesinvoice"
          component={SalesInvoice}
        />
        <Route exact path="/receivables/customers" component={Customer} />
        <Route
          exact
          path="/receivables/createsalesinvoice"
          component={CreateSalesInvoice}
        />
        {/* <Route exact path='/receivables/customers/customerhistory' component={} /> */}
      </Switch>
    </div>
  );
};

export default App;
