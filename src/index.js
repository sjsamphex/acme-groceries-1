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
  // componentDidMount() {
  //   //do a dispatch somehow? or receive props data
  // }
  render() {
    console.log('app sees this', this.props.groceries);
    return (
      <div>
        <h1>Acme Groceries</h1>
        {/* {this.props.groceries.map((groc) => (
          <li>{groc.name}</li>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = async () => {
  const grocerydata = (await axios.get('/api/groceries')).data;
  console.log('mapstatetoprops sees this: ', grocerydata);
  return {
    groceries: grocerydata,
  };
};
//will get passed into the provider i think

const mapDispatchToProps = () => {
  return {
    loadGroceries() {
      return {
        type: LOAD_GROCERIES,
        store,
      };
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
