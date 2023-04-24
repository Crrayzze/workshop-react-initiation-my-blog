import './App.css';
import { Router } from './pages/router';
import { NavigationBar } from './components/navigationBar/navigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Router />
    </div>
  );
}

export default App;
