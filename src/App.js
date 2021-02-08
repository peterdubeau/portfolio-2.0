import './App.css';
import {useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'

function App() {

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);
    
    return matches;
  }
  
  let isPageWide = useMediaQuery('(max-width: 720px)')

  return (<>
    
    <Route path='/' exact>
      <Home isPageWide={isPageWide}/>
    </Route>
    
    <Route path='/menu' exact>
      <Menu isPageWide={isPageWide}/>
    </Route>

    {/* <div className='gb-controls'> buttons will go here</div> */}

  </>);
}

export default App;
