import { createAction } from '@reduxjs/toolkit';
import { apiCall } from '../API';

export const GET_CHARACTER_BY_ID = createAction('GET_CHARACTER_BY_ID');

export const getCharacterByID = (id) => async (dispatch) => {
  const { data } = await apiCall.get(`/character/${id}`);
  dispatch(GET_CHARACTER_BY_ID(data));
};
