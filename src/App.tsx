
import './App.css';
import General from './components/General';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
     <General>
        <h1>Hi</h1>
     </General>
     <Greet name="jaison" status='online'/>
    </div>
  );
}

export default App;
