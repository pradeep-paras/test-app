import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Dashboard from './components/Dashboard';
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';

function App() {
  return (
    <Router>
        <ToastContainer hideProgressBar ={true}/>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}/>
          <Route exact path="/signup1" element={<Signup1 />}/>
          <Route exact path="/signup2" element={<Signup2 />}/>
          <Route index element={<Navigate to="/dashboard" />} />
        </Routes>
    </Router>
  );
}

export default App;
