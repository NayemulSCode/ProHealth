import './App.css';
import Anthropometrics from './components/Anthropometrics/Anthropometrics';
import EnergyNeed from './components/EnergyNeed/EnergyNeed';
function App() {
  return (
    <div className="App">
      <h1 className="">Health app</h1>
      <Anthropometrics />
      <EnergyNeed />
    </div>
  );
}

export default App;
