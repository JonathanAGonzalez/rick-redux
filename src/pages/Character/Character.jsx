import { Grid, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCharacterByID } from '../../redux/actions/characterById';

const Character = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { character } = useSelector((state) => state.getCharacterById);

  useEffect(() => {
    dispatch(getCharacterByID(id));
  }, [id, dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3}>
          <img src={character?.image} alt={character?.name} />
          <Typography variant="h3">{character?.name}</Typography>
          <Typography variant="h3">{character?.species}</Typography>
          <Typography variant="h3">{character?.gender}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Character;
