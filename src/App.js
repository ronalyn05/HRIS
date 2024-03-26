import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LoginPage from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgotpassword';
import Dashboard from './components/dashboard';
import NewHireUpload from './components/newHireUpload';
import Movement from './components/movement';
import ExitClearance from './components/exitclearance';
import AdminModule from './components/adminModule';
import Footer from './components/footer';
import UpdateEmployeeInfo from './components/update'; 


function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/newHireUpload" element={<NewHireUpload />} />
          <Route path="/movement" element={<Movement />} />
          <Route path="/exitclearance" element={<ExitClearance />} />
          <Route path="/adminModule" element={<AdminModule />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/update/:employeeId" element={<UpdateEmployeeInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
