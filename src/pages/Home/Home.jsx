import { useEffect } from 'react';
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
    <main className="container__home">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Buscar personaje"
          name="name"
          variant="outlined"
          onChange={formik.handleChange}
          fullWidth
        />
        <p>{formik.errors.name}</p>
      </form>

      <div className="container__list--card">
        {characters?.map((character, index) => (
          <h2 key={character.id}>
            {character.name}
            {index !== characters.length - 1 && ','}
          </h2>
        ))}
      </div>
    </main>
  );
}

export default Home;
