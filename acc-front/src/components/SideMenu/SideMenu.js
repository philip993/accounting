import React, { useState } from 'react';

// Style
import './SideMenuStyle.scss';
// React Router Dom
import { Link } from 'react-router-dom';
// Material Ui
import { Drawer, List, ListItem, IconButton, Button } from '@material-ui/core';
import MenuIcons from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDrawer = () => {
    setIsOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div className="sideMenu">
      <IconButton
        onClick={isOpen === false ? handleOpenDrawer : handleCloseDrawer}
      >
        <MenuIcons fontSize="large" className="icon" />
      </IconButton>
      <Drawer
        className="drawer"
        anchor="left"
        open={isOpen === true}
        onClose={handleCloseDrawer}
      >
        <List className="list" onClick={handleCloseDrawer}>
          <div className="listItemClose">
            <IconButton onClick={handleCloseDrawer} className="button">
              <CloseIcon className="icon" />
            </IconButton>
          </div>
          <ListItem className="listItem">
            <Link to="/" className="link">
              Home
            </Link>
          </ListItem>
          <ListItem className="listItem">
            <Link to="/general" className="link">
              General Ledger
            </Link>
          </ListItem>
          <ListItem className="listItem">
            <Link to="/hr" className="link">
              Human Resources
            </Link>
          </ListItem>
          <ListItem className="listItem">
            <Link to="/receivables" className="link">
              Receivables
            </Link>
          </ListItem>
          <ListItem className="listItem">
            <Link to="/payables" className="link">
              Payables
            </Link>
          </ListItem>
          <ListItem className="listItem">
            <Link to="/journal" className="link">
              Payment Journal
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;
