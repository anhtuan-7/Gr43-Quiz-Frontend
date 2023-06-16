import { Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import UsersTable from "./pages/UsersTable";
import QuizFormPage from "./pages/QuizFormPage";
import CreateQuiz from "./pages/CreateQuiz";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import QuizTestPage from "./pages/QuizTestPage";
import StudentPage from "./pages/StudentPage";
import FormDetailPage from "./pages/FormDetailPage";
import QuizDetailPage from "./pages/QuizDetailPage";
import JoinPasswordPage from "./pages/JoinPasswordPage";
import QuizEditPage from "./pages/QuizEditPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/updatepassword" element={<UpdatePasswordPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/users" element={<UsersTable />} />
      <Route path="/forms" element={<QuizFormPage />} />
      <Route path="/forms/:id" element={<FormDetailPage />} />
      <Route path="/forms/:id/join" element={<JoinPasswordPage />} />
      <Route path="/forms/:id/exam" element={<QuizTestPage />} />
      <Route path="/students" element={<StudentPage />} />
      <Route path="/quizzes/:id" element={<QuizDetailPage />} />
      <Route path="/quizzes/edit/:id" element={<QuizEditPage />} />
      <Route path="/createquiz" element={<CreateQuiz />} />
    </Routes>
  );
}

export default App;
