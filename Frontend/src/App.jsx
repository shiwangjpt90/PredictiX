import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PredictorsPage from "./pages/PredictorsPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "/Users/shshankmoudgil/Downloads/PredictiX-main/Frontend/src/pages/SignupPage.jsx";
import HomePage from "./pages/HomePage";
import BreastPage from "./pages/BreastPage";
import LungPage from "./pages/LungPage";
import HeartPage from "./pages/HeartPage";
import DiabetesPage from "./pages/DiabetesPage";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Routes without Navbar */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Routes with Navbar */}
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <HomePage />
                </div>
              }
            />
            <Route
              path="/predictors"
              element={
                <div>
                  <Navbar />
                  <PredictorsPage />
                </div>
              }
            />
            <Route
              path="/predictors/breast"
              element={
                <div>
                  <Navbar />
                  <BreastPage />
                </div>
              }
            />
            <Route
              path="/predictors/lung"
              element={
                <div>
                  <Navbar />
                  <LungPage />
                </div>
              }
            />
            <Route
              path="/predictors/heart"
              element={
                <div>
                  <Navbar />
                  <HeartPage />
                </div>
              }
            />
            <Route
              path="/predictors/diabetes"
              element={
                <div>
                  <Navbar />
                  <DiabetesPage />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <Navbar />
                  <AboutPage />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
