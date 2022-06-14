import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
