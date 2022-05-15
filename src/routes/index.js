//Components
import Character from '../pages/Character/Character';
import CharacterList from '../pages/CharacterList';
import Home from '../pages/Home';

//Layout
import LayoutTheme from '../layout/Layout';

export const publicRoutes = [
  {
    path: '/',
    id: 1,
    element: <Home />,
  },
  {
    path: '/character/list/:name',
    id: 2,
    element: (
      <LayoutTheme>
        <CharacterList />
      </LayoutTheme>
    ),
  },
  {
    path: '/character/:id',
    id: 3,
    element: (
      <LayoutTheme>
        <Character />
      </LayoutTheme>
    ),
  },
];
