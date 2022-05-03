import { Route, Switch } from 'react-router-dom'
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <CharacterList />
      </Route>
    </Switch>
  );
}
