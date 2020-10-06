import React, { useState } from 'react';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';
// Style
import './NavbarStyle.scss';
// Material Ui
import {
  AppBar,
  Toolbar,
  Breadcrumbs,
  Typography,
  Button,
  MenuItem,
  Menu,
} from '@material-ui/core';
import SideMenu from '../SideMenu/SideMenu';

const Navbar = () => {
  let location = useLocation();
  let history = useHistory();
  let currentRoutes = [];
  currentRoutes = location.pathname !== '/' ? location.pathname.split('/') : [];
  if (currentRoutes.length > 0) {
    currentRoutes.shift();
  }
  return (
    <div className="navbar">
      <AppBar position="static" className="appBar">
        <Toolbar className="toolbar">
          <SideMenu />
          <Breadcrumbs
            maxItems={5}
            aria-label="breadcrumb"
            className="breadcrumbs"
          >
            <Link className="startlink" onClick={() => history.push('/')}>
              Home
            </Link>
            {currentRoutes.length == 1 ? (
              <Link className="startlink">{currentRoutes[0]}</Link>
            ) : (
              currentRoutes.map((route, index) => {
                return index !== currentRoutes.length - 1 ? (
                  <Link
                    className="startlink"
                    key={index}
                    onClick={() => history.goBack(-1)}
                  >
                    {route}
                  </Link>
                ) : (
                  <Link className="startlink">{route}</Link>
                );
              })
            )}
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
