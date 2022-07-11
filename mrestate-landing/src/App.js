import './App.css';
import FirstRow from './components/firstRow/FirstRow';
import SecondRow from './components/secondRow/SecondRow';
import Thirdrow from './components/thirdrow/Thirdrow';


import '../src/globals.css'

function App() {
  return (
    <div className="App">
        <FirstRow />
        <SecondRow />
        <Thirdrow />
    </div>
  );
}

export default App;