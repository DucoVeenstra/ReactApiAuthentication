import * as actionType from './actionTypes';

const initialState = {
  loading: true,
  data: [],
}

export default function(state=initialState, action) {
  switch(action.type) {
    case actionType.TASKS_FETCH:
      return Object.assign({}, state, { data: action.payload, loading: false });
    default:
      return state;
  }
}