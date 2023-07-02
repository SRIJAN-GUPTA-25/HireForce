import './App.css';
import Homepage from './Components/Home';

import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CandidateSearch from './Components/Candidatesearch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<h1>About-Us Page</h1>} />
        <Route path="/candidate" element={<CandidateSearch />} />
      </Routes>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
