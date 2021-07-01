import './App.css';
import Anthropometrics from './components/Anthropometrics/Anthropometrics';
import EnergyNeed from './components/EnergyNeed/EnergyNeed';
import Energy from './components/Estimated/Energy';
import Protein from './components/Estimated/Protein';
import Recommendation from './components/Estimated/Recommendation';
import ServingNumbers from './components/ServingNumbers/ServingNumbers';

import MultiStep from 'react-multistep'

 const steps = [
  { name:'Anthropometrics', component: <Anthropometrics /> },
  { name:'Energy', component: <Energy /> },
  { name:'Protein', component: <Protein /> },
  { name:'Recommendation', component: <Recommendation /> },
  { name:'Serving', component: <ServingNumbers /> },
]
const prevStyle = {'background': '#33c3f0', 'border-width': '2px', 'padding':'10px'}
const nextStyle = {'background': '#33c3f0',  'border-width': '2px', 'padding':'10px', 'margin-left':'5px'}
function App() {
  return (
    <div className="App">
      <MultiStep showNavigation={true} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
    </div>
  );
}

export default App;
