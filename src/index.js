import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { LOAD_GROCERIES } from './store';
import axios from 'axios';

const _Groceries = ({ groceries }) => {
  return (
    <ul>
      {groceries.map((groc, idx) => {
        return (
          <li key={idx} className={groc.purchased ? 'purchased' : ''}>
            {groc.name}
          </li>
        );
      })}
    </ul>
  );
};

const Groceries = connect((state) => state)(_Groceries);

class _App extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.props.loadGroceries();
  }
  render() {
    const purchased = this.props.groceries.filter(
      (groc) => groc.purchased === true
    );
    return (
      <div>
        <h1>Acme Groceries</h1>
        <div></div>
        <Groceries />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groceries: state.groceries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadGroceries: async () => {
      const groceries = (await axios.get('/api/groceries')).data;
      dispatch({ type: LOAD_GROCERIES, data: groceries });
    },
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(_App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
