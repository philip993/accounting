import React from 'react';

// Style
import './MenuStyle.scss';
// import React Router Dom
import { Link } from 'react-router-dom';

const HumanResourcesMenu = () => {
  return (
    <div className="menu">
      <h1>Human Resources</h1>
      <ul>
        <li>
          <h3>Lists</h3>
        </li>
        <li>
          <h3>Reports</h3>
        </li>
        <li>
          <h3>Tasks</h3>
        </li>
        <li>
          <h3>History</h3>
        </li>
      </ul>
    </div>
  );
};

export default HumanResourcesMenu;
