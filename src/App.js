import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import SignUp from './components/SignUp';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignUp} />
        </Routes>
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
