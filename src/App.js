import logo from './logo.svg';
import './App.css';
import Tile from './Components/Tile'; 
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
          Hey there

        <Tile />

      </div>
    </Provider>
  );
}

export default App;
