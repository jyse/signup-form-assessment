import "./App.css";
import SignUpForm from "./components/SignUpForm";
import UserPage from "./components/UserPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
