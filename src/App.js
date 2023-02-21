import logo from './logo.svg';
import './App.css';
import Tile from './Components/Tile.js'; 
import Port from './Components/Port.js';
import { useSelector, useDispatch, Provider } from 'react-redux'
import {setPrimary} from './Services/tmdbSlice'
import store from './Services/store'

function App() {
  //const dispatch = useDispatch()
  //const targetRef = useRef();
  //const reload = useSelector((state => state.focus.reload)); 
  return (
    <Provider store={store}>

      <div className="App">
    
        <Tile />
        <Port />
        <div>
        <svg height="200" width="500">
          <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"
          style={{fill:'none', stroke:'black', strokeWidth:3}} />
        </svg> 

        </div>

      </div>
    </Provider>
  );
}

export default App;
