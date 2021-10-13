import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/navbar/Header';
import ListOfRockets from './components/rockets/ListOfRockets';
import Profile from './pages/Profile';
import Missions from './components/missions/missions';

function App() {
  return (
    <Router className="App">
      <Header />
      <Route exact path="/" component={ListOfRockets} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Missions" component={Missions} />
    </Router>
  );
}

export default App;
