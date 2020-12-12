import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { LOAD_GROCERIES } from './store';
import axios from 'axios';

class _App extends Component {
  constructor(props) {
    super(props);
    //should this do state equals getState from store?
  }
  async componentDidMount() {
    //const grocerydata = (await axios.get('/api/groceries')).data;
    this.props.loadGroceries();
  }
  render() {
    console.log('app sees this', this.props.groceries);
    const purchased = this.props.groceries.filter(
      (groc) => groc.purchased === true
    );
    return (
      <div>
        <h1>Acme Groceries</h1>
        <div></div>
        <ul>
          {this.props.groceries.map((groc, idx) => {
            return (
              <li key={idx} className={groc.purchased ? 'purchased' : ''}>
                {groc.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('mapstatetoprops sees this: ', grocerydata);
  return {
    groceries: state.groceries,
  };
};
//will get passed into the provider i think

const mapDispatchToProps = (dispatch) => {
  return {
    loadGroceries: async () => {
      const groceries = (await axios.get('/api/groceries')).data;
      dispatch({ type: LOAD_GROCERIES, data: groceries });
    },
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(_App);

//will use Provide here
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
