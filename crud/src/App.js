import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Users from './components/Users';
import NewUser from './components/NewUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
