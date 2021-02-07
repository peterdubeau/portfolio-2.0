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

    {/* <div className='gb-controls'> buttons will go here</div> */}

  </>);
}

export default App;
