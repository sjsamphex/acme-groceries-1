import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
// import axios from './axios';

class _App extends Component {
  constructor(props) {
    super(props);
    //should this do state equals getState from store?
  }
  render() {
    return (
      <div>
        <h1>Acme Groceries</h1>
        {this.props.groceries}
      </div>
    );
  }
}

const mapStateToProps = () => {
  // const grocerydata = (axios()).data;
  return {
    groceries: 5,
  };
};
//will get passed into the provider i think

const mapDispatchToProps = () => {
  return {};
};

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

//will use Provide here
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
