import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getCharacterByName } from '../../redux/actions/characterByName';
import CardItem from './components/Card';

const CharacterList = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { character } = useSelector((state) => state.getCharacterByName);

  useEffect(() => {
    dispatch(getCharacterByName(name));
  }, [dispatch, name]);

  return (
    <div>
      <h2>Character</h2>
      <div className="container__cards">
        {character?.results.map((character) => (
          <CardItem key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
