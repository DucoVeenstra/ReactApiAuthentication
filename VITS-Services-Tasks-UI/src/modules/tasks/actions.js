import * as actionTypes from './actionTypes';
import api from '../../api';

export function fetchTasks() {
  return function (dispatch, getState) {
    api.vitsTasksApiClient.get(`${process.env.REACT_APP_VITS_TASKS_API_ROOT_URL}/api/Tasks`)
      .then(resp => {
        dispatch({
          type: actionTypes.TASKS_FETCH,
          payload: resp.data
        });
      })
      .catch(err => {
        console.log('Error on Fetching Tasks from API', err);
      });
  }
}