import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ChartAccounts from '../ChartAccounts/ChartAccounts';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Journal from '../Journal/Journal';
import Vendor from '../Vendor/Vendor';
import CreateVendor from '../CreateVendor/CreateVendor';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chart" component={ChartAccounts} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/vendors" component={Vendor} />
        <Route exact path="/createvendor" component={CreateVendor} />
      </Switch>
    </div>
  );
};

export default App;
