import React from 'react';
import { connect } from 'react-redux';

const Nav = ({ groceries }) => {
  const needGroc = groceries.filter((grocery) => !grocery.purchased);
  return (
    <nav>
      <a href="#">All ({groceries.length})</a>
      <a href="#needs">Needs ({needGroc.length})</a>
      <a href="#purchased">Purchased</a>
    </nav>
  );
};

export default connect((state) => state)(Nav);
