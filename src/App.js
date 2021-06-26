import './App.css';
import Anthropometrics from './components/Anthropometrics/Anthropometrics';
import EnergyNeed from './components/EnergyNeed/EnergyNeed';
import Energy from './components/Estimated/Energy';
function App() {
  return (
    <div className="App">
      <h1 className="">Health app</h1>
      <Anthropometrics />
      <EnergyNeed />
      <Energy />
    </div>
  );
}

export default App;
