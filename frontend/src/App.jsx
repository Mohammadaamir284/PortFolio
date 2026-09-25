import React from "react"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";

import WelcomePage from "./pages/Landing/index.jsx"
import ProjectPage from "./pages/Project/index.jsx"
import SkillPage from "./pages/Skill/index.jsx"
import AboutPage from "./pages/About/index.jsx"
import ContactPage from "./pages/Contact/index.jsx"
import AdminLogin from "./pages/Admin/adminLogin.jsx"
import AddProjectPage from "./pages/Admin/addProjectPage.jsx"

import ProtectedRoute, {GuestRoute} from "./context/ProtectedRoute.jsx"
import ProjectDetails from "./pages/Project/ProjectDetails.jsx";

function App() {

  return (
    <>
     <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />

        <Route path="/admin/login" element={
          <GuestRoute>
            <AdminLogin />
          </GuestRoute>
          } />

        <Route path="/addproject" element={
          <ProtectedRoute>
            <AddProjectPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App

