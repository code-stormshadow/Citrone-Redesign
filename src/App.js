import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboardpage/Dashboard';
import LandingPage from './components/pages/landingpage/LandingPage';
import LoginPage from './components/pages/loginpage/LoginPage';
import SignUpPage from './components/pages/signuppage/SignUpPage';
import CourseContent from './components/pages/dashboardpage/CourseContent';
import Assignment from './components/pages/dashboardpage/Assignment';
import Quizzes from './components/pages/dashboardpage/Quizzes';
import Students_Tutors from './components/pages/dashboardpage/Students_Tutors';
import Faq from './components/pages/dashboardpage/FAQs';
import Settings from './components/pages/dashboardpage/Settings';
import LogOut from './components/pages/dashboardpage/LogOut';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="course-content" element={<CourseContent />}></Route>
        <Route path="assignment" element={<Assignment />}></Route>
        <Route path="quizzes" element={<Quizzes />}></Route>
        <Route path="students_tutors" element={<Students_Tutors />}></Route>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="settings" element={<Settings />}></Route>
        <Route path="logout" element={<LogOut />}></Route>
      </Routes>
    </div>
  );
}
export default App;
