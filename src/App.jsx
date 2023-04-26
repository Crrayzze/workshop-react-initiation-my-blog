import './App.css';
import { Router } from './pages/router';
import { NavigationBar } from './components/navigationBar/navigationBar';

export const App = () => {
  return (
    <div>
      <NavigationBar />
      <Router />
    </div>
  );
}
