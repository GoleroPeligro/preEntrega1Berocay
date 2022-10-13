
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer name="Pablo"/>
    </div>
  );
}

export default App;
