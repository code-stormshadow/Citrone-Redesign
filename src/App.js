import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboardpage/Dashboard';
import LandingPage from './components/pages/landingpage/LandingPage';
import LoginPage from './components/pages/signuppage/LoginPage';
import SignUpPage from './components/pages/signuppage/SignUpPage';
import ForgotPasswordPage from './components/pages/signuppage/ForgotPasswordPage';
import CheckMail from './components/pages/signuppage/CheckMail';
import SetPassword from './components/pages/signuppage/SetPassword';
import Quizzes from './components/pages/dashboardpage/quizComponents/Quizzes';
import CourseContent from './components/pages/dashboardpage/CourseContent';
import Assignment from './components/pages/dashboardpage/Assignment';
import Students_Tutors from './components/pages/dashboardpage/Students_Tutors';
import Faq from './components/pages/dashboardpage/FAQs';
import Settings from './components/pages/dashboardpage/Settings';
import LogOut from './components/pages/dashboardpage/LogOut';
import LessonAssignments from './components/pages/dashboardpage/Assignment Components/LessonAssignments';
import LessonGrades from './components/pages/dashboardpage/Assignment Components/LessonGrades';
import ModuleOne from './components/pages/dashboardpage/quizComponents/QuizModuleOne';
import GradesBreakdown from './components/pages/dashboardpage/Assignment Components/GradesBreakdown';
import CourseModuleOne from './components/pages/dashboardpage/db_ components/CourseModuleOne';
import CompletedModules from './components/pages/dashboardpage/db_ components/CompletedModules';
import Quiz2Grade from './components/pages/dashboardpage/quizComponents/Quiz2Grade';
import LessonOneAssignment from './components/pages/dashboardpage/db_ components/LessonOneAssignment';
import ReSubmit from './components/pages/dashboardpage/db_ components/Resubmit';
import { useState, useEffect } from 'react';

function App() {
  const [isNewUser, setIsNewUser] = useState(false);

  const Greeting = () => {
    const classes = {
      /* Define your classes object here */
    };
    if (isNewUser) {
      return (
        <div id={classes.greetingDiv} style={{ display: 'block' }}>
          <h1 id={classes.greetingHeader}>
            <span id={classes.congratulations}>Congratulations!</span> Your account has been
            successfully created. You may log in now.
          </h1>
        </div>
      );
    } else {
      return null;
    }
  };
  Greeting();

  useEffect(() => {
    // Call server API to check if user is new
    fetch('/api/isNewUser')
      .then((res) => res.json())
      .then((data) => {
        setIsNewUser(data.isNewUser);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="login" element={<LoginPage isNewUser={isNewUser} />}></Route>
        <Route path="forgot-password" element={<ForgotPasswordPage />}></Route>
        <Route path="checkmail" element={<CheckMail />}></Route>
        <Route path="set-password" element={<SetPassword />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="course-content" element={<CourseContent />}></Route>
        <Route path="assignment" element={<Assignment />}></Route>
        <Route path="lesson-assignments" element={<LessonAssignments />}></Route>
        <Route path="lesson-grades" element={<LessonGrades />}></Route>
        <Route path="grades-breakdown" element={<GradesBreakdown />}></Route>
        <Route path="quizzes" element={<Quizzes />}></Route>
        <Route path="students_tutors" element={<Students_Tutors />}></Route>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="settings" element={<Settings />}></Route>
        <Route path="logout" element={<LogOut />}></Route>
        <Route path="moduleone" element={<ModuleOne />}></Route>
        <Route path="course-module-one" element={<CourseModuleOne />}></Route>
        <Route path="/dashboard/completed-modules" element={<CompletedModules />}></Route>
        <Route path="quizgrade" element={<Quiz2Grade />}></Route>
        <Route path="lesson-1-assignment" element={<LessonOneAssignment />}></Route>
        <Route path="re-submit" element={<ReSubmit />}></Route>
      </Routes>
    </div>
  );
}
export default App;
