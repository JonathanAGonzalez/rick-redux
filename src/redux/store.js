import { configureStore } from '@reduxjs/toolkit';

//Reducers
import {
  getAllCharacters,
  getCharacterByName,
  getCharacterById,
} from './reducers/characters';

//Store
export default configureStore({
  reducer: {
    getAllCharacters,
    getCharacterByName,
    getCharacterById,
  },
});
