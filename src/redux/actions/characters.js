import { createAction } from '@reduxjs/toolkit';

import { apiCall } from '../API';

export const START_GET_ALL_CHARACTERS = createAction(
  'START_GET_ALL_CHARACTERS'
);
export const ERROR_GET_ALL_CHARACTERS = createAction(
  'ERROR_GET_ALL_CHARACTERS'
);
export const SUCCESS_GET_ALL_CHARACTERS = createAction(
  'SUCCESS_GET_ALL_CHARACTERS'
);

export const fetchAllCharacters = () => async (dispatch) => {
  try {
    //Start call API
    dispatch(START_GET_ALL_CHARACTERS());

    //Call API
    const { data } = await apiCall.get(`/character`);

    //Dispatch success
    dispatch(SUCCESS_GET_ALL_CHARACTERS(data.results));
  } catch (error) {
    dispatch(ERROR_GET_ALL_CHARACTERS(error));
  }
};
