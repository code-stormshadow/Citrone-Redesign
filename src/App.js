import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboardpage/Dashboard';
import LandingPage from './components/pages/landingpage/LandingPage';
import LoginPage from './components/pages/loginpage/LoginPage';
import SignUpPage from './components/pages/signuppage/SignUpPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
