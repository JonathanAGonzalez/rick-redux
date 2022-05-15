import { createAction } from '@reduxjs/toolkit';
import { apiCall } from '../API';

export const START_GET_CHARACTER = createAction('START_GET_CHARACTER');

export const ERROR_GET_CHARACTER = createAction('ERROR_GET_CHARACTER');

export const SUCCESS_GET_CHARACTER = createAction('SUCCESS_GET_CHARACTER');

export const getCharacterByName = (name) => async (dispatch) => {
  try {
    //Start call API
    dispatch(START_GET_CHARACTER());

    //Call API
    const { data } = await apiCall.get(`/character/?name=${name}`);

    //Dispatch success
    dispatch(SUCCESS_GET_CHARACTER(data));
  } catch (error) {
    //Dispatch error
    dispatch(ERROR_GET_CHARACTER(error));
  }
};
