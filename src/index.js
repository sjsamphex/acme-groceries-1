import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { LOAD_GROCERIES } from './store';
import axios from 'axios';
import Nav from './Nav';

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
  componentDidMount() {
    this.props.loadGroceries();
    window.addEventListener('hashchange', () => {
      this.props.setView(window.location.hash.slice(1));
    });
    this.props.setView(window.location.hash.slice(1));
  }
  render() {
    console.log(this.props.view);
    const purchased = this.props.groceries.filter(
      (groc) => groc.purchased === true
    );
    return (
      <div>
        <h1>Acme Groceries</h1>
        <Nav />
        <Groceries />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    loadGroceries: async () => {
      const groceries = (await axios.get('/api/groceries')).data;
      dispatch({ type: LOAD_GROCERIES, data: groceries });
    },
    setView: (view) => dispatch({ type: 'SET_VIEW', view }),
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(_App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
