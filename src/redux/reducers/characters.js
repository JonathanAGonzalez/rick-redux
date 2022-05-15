import { createReducer } from '@reduxjs/toolkit';
import { GET_CHARACTER_BY_ID } from '../actions/characterById';
import { SUCCESS_GET_CHARACTER } from '../actions/characterByName';
import { SUCCESS_GET_ALL_CHARACTERS } from '../actions/characters';

export const getAllCharacters = createReducer([], (builder) => {
  builder.addCase(SUCCESS_GET_ALL_CHARACTERS, (state, action) => {
    return {
      ...state,
      characters: action.payload,
    };
  });
});

export const getCharacterByName = createReducer({}, (builder) => {
  builder.addCase(SUCCESS_GET_CHARACTER, (state, action) => {
    return {
      ...state,
      character: action.payload,
    };
  });
});

export const getCharacterById = createReducer({}, (builder) => {
  builder.addCase(GET_CHARACTER_BY_ID, (state, action) => {
    return {
      ...state,
      character: action.payload,
    };
  });
});
