import logo from './logo.svg';
import './App.css';
import CallBackFunction from './components/CallBackFunction';
import Object from './components/Objects';
import ArraysStore from './components/ArraysStore';
import Destructring from './components/Destructring';

function App() {
  return (
    <div className="App">
      
    <CallBackFunction/>
    <hr></hr>
    <Object></Object>
    <hr></hr>
    <ArraysStore/>
    <hr></hr>
    <Destructring/>
 
    </div>
  );
}

export default App;
