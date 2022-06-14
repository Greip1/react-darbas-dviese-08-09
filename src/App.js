import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AddLog from './pages/AddLog';
import AddMeds from './pages/AddMeds';
import AddPet from './pages/AddPet';
import { LogsPage } from './pages/LogsPage';
import MedicationPage from './pages/MedicationPage';
import PetsPage from './pages/PetsPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path={'/pets'}>
          <PetsPage />
        </Route>
        <Route path={'/meds'}>
          <MedicationPage />
        </Route>
        <Route path={'/add'}>
          <AddPet />
        </Route>
        <Route path={'/addMeds'}>
          <AddMeds />
        </Route>
        <Route path={'/log'}>
          <LogsPage />
        </Route>
        <Route path={'/addLog'}>
          <AddLog />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
