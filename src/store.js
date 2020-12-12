import { createStore } from 'redux';

const state = {
  groceries: 5,
};

//action constant
export const LOAD_GROCERIES = 'load groceries';

//action creators
const loadGroceries = (groceries) => {
  return {
    type: LOAD_GROCERIES,
    state: groceries,
  };
};

const store = createStore((initialState = state, action) => {
  if (action === null) {
  }
  return { ...initialState };
});

export default store;
