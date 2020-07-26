/**
 * Sahay App
 * @author: Abhishek Saini
 */
import axios from 'axios';
import * as types from './types';
// import user from '../../data/user.json';
import URI_ENDPOINT from '../../helpers/constants';

const setLoggedInState = loggedInState => (
  {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
);

const logIn = (email, password) => {
  // const action = (dispatch) => {
  //   if (email === user.email && password === user.password) {
  //     dispatch(setLoggedInState(true));
  //     return true;
  //   }
  //   dispatch(setLoggedInState(false));
  //   return false;
  // };
  const action = (dispatch) => {
    return axios
      .post(`${URI_ENDPOINT}/api/users/authenticate`, {
        username: email,
        password,
      })
      .then((res) => {
        dispatch(setLoggedInState(true));
        return res;
      }, () => {
        dispatch(setLoggedInState(false));
        return false;
      });
  };
  return action;
};

export {
  logIn,
  setLoggedInState,
};
