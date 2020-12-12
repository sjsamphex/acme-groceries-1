import { createStore } from 'redux';

const state = {
  groceries: [],
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
  } else if (action.type === LOAD_GROCERIES) {
    return { ...state, groceries: action.data };
  }
  return { ...initialState };
});

export default store;
