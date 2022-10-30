import './css/app.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReferMeFor from './components/refermefor/ReferMeFor';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Login from './components/login-signup/Login';
import SignUp from './components/login-signup/SignUp';

function App() {
  return (
    <Router>
      <div className="app-css">
        <Navbar />
        <Routes>
          <Route exact path="/refermefor" element={<ReferMeFor />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login-signup/signup" element={<SignUp />} />
          <Route exact path="/login-signup/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
