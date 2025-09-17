import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RecommendationDetails from "./pages/RecommendationDetails";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recommendations from "./pages/Recommendations";
import NotFound from "./pages/NotFound";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";

export default function AppRouter() {
  return (
    <Routes>
      {/* ✅ Public routes */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <MainLayout>
            <Signup />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />

      {/* ✅ Protected routes */}
      {/* <Route element={<ProtectedRoute />}> */}
      <Route>
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/recommendations"
          element={
            <MainLayout>
              <Recommendations />
            </MainLayout>
          }
        />
        <Route
          path="/recommendations/:id"
          element={
            <MainLayout>
              <RecommendationDetails />
            </MainLayout>
          }
        />
        <Route
          path="/resume-analyzer"
          element={
            <MainLayout>
              <ResumeAnalyzer />
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Route>

      {/* ✅ Catch-all for 404 */}
      <Route
        path="*"
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
}
