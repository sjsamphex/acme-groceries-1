import { createStore } from 'redux';

const initialState = {
  groceries: [],
  view: '',
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

const store = createStore((state = initialState, action) => {
  if (action === null) {
  }
  if (action.type === LOAD_GROCERIES) {
    return { ...state, groceries: action.data };
  }
  if (action.type === 'SET_VIEW') {
    state = { ...state, view: action.view };
  }
  return state;
});

export default store;
