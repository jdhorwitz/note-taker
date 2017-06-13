import { SAVE_NOTE } from './actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_NOTE:
      return [...state, payload];
    default:
      return state;
  }
};
