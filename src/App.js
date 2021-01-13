import './App.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'

function App() {

  return (<>
    
    <Route path='/' exact>
      <Home />
    </Route>
    
    <Route path='/menu' exact>
      <Menu />
    </Route>
  </>);
}

export default App;
