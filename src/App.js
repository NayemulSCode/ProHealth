import './App.css';
import Anthropometrics from './components/Anthropometrics/Anthropometrics';
import EnergyNeed from './components/EnergyNeed/EnergyNeed';
import Energy from './components/Estimated/Energy';
import Protein from './components/Estimated/Protein';
import Recommendation from './components/Estimated/Recommendation';
import ServingNumbers from './components/ServingNumbers/ServingNumbers';
import FoodExchangeTable from './components/foodExchange/FoodExchangeTable';
function App() {
  return (
    <div className="App">
      <h1 className="">Health app</h1>
      <Anthropometrics />
      <EnergyNeed />
      <Energy />
      <Protein />
      <Recommendation />
      <ServingNumbers />
      <FoodExchangeTable />
    </div>
  );
}

export default App;
