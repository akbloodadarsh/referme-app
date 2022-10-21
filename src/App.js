import './css/app.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReferMeFor from './components/refermefor/ReferMeFor';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="app-css">
        <Navbar />
        <Routes>
          <Route path="/refermefor" element={<ReferMeFor />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
