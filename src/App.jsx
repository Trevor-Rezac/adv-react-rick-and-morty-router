import { Route, Switch } from 'react-router-dom'
import CharacterDetail from './views/CharacterDetail';
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <Switch>
      <Route exact path='/characters/:id'>
        <CharacterDetail />
      </Route>
      <Route exact path='/'>
        <CharacterList />
      </Route>
    </Switch>
  );
}
