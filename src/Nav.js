import React from 'react';
import { connect } from 'react-redux';

const Nav = ({ groceries, view }) => {
  const needGroc = groceries.filter((grocery) => !grocery.purchased);
  const purchasedGroc = groceries.filter((grocery) => grocery.purchased);
  return (
    <nav>
      <a href="#" className={view === '' ? 'selected' : ''}>
        All ({groceries.length})
      </a>
      <a href="#needs" className={view === 'needs' ? 'selected' : ''}>
        Needs ({needGroc.length})
      </a>
      <a href="#purchased" className={view === 'purchased' ? 'selected' : ''}>
        Purchased ({purchasedGroc.length})
      </a>
    </nav>
  );
};

export default connect((state) => state)(Nav);
