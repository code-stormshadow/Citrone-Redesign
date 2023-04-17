import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboardpage/Dashboard';
import LandingPage from './components/pages/landingpage/LandingPage';
import LoginPage from './components/pages/loginpage/LoginPage';
import SignUpPage from './components/pages/signuppage/SignUpPage';
import ForgotPasswordPage from './components/pages/signuppage/ForgotPasswordPage';
import CheckMail from './components/pages/signuppage/CheckMail';
import SetPassword from './components/pages/signuppage/SetPassword';

import CourseContent from './components/pages/dashboardpage/CourseContent';
import Assignment from './components/pages/dashboardpage/Assignment';
import Quizzes from './components/pages/dashboardpage/Quizzes';
import Students_Tutors from './components/pages/dashboardpage/Students_Tutors';
import Faq from './components/pages/dashboardpage/FAQs';
import Settings from './components/pages/dashboardpage/Settings';
import LogOut from './components/pages/dashboardpage/LogOut';
import ModuleOne from './components/pages/dashboardpage/QuizModuleOne';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="forgotpassword" element={<ForgotPasswordPage />}></Route>
        <Route path="checkmail" element={<CheckMail />}></Route>
        <Route path="setpassword" element={<SetPassword />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="course-content" element={<CourseContent />}></Route>
        <Route path="assignment" element={<Assignment />}></Route>
        <Route path="quizzes" element={<Quizzes />}></Route>
        <Route path="students_tutors" element={<Students_Tutors />}></Route>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="settings" element={<Settings />}></Route>
        <Route path="logout" element={<LogOut />}></Route>
        <Route path="moduleone" element={<ModuleOne />}></Route>
      </Routes>
    </div>
  );
}
export default App;
