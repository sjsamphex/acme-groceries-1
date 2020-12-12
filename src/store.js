import { createStore } from 'redux';

const state = {
  groceries: 5,
};

const store = createStore((initialState = state, action) => {
  if (action === null) {
  }
  return { ...initialState };
});

export default store;
