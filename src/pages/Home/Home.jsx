import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCharacters } from '../../redux/actions/characters';
import { TextField } from '@mui/material';

function Home() {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.getAllCharacters);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: ({ name }) => {
      navigate(`/character/list/${name}`);
    },
    validate: (e) => {
      const errors = {};
      if (e.name === '') {
        errors.name = 'El campo es requerido';
      }
      return errors;
    },
  });

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  return (
    <main className="Home">
      <h1>El mundo de rick</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Buscar personaje"
          name="name"
          variant="outlined"
          onChange={formik.handleChange}
        />
        <p>{formik.errors.name}</p>
      </form>

      {characters?.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
        </div>
      ))}
    </main>
  );
}

export default Home;
