import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Caissier_HomePage from "./Pages/Caissier_HomePage";
import Admin_HomePage from "./Pages/Admin_HomePage";
import Respo_Sect_HomePage from "./Pages/Respo_Sect_HomePage";
import Surveillant_HomePage from "./Pages/Surveillant_HomePage";
import Enseignant_HomePage from "./Enseignant_HomePage";
import Etudiant_HomePage from "./Pages/Etudiant_HomePage";
import ExistingUsersWithoutAccount from "./components/forms/ExistingUsersWithoutAccount";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route
              path="*"
              element={
                // <div className="bg-[#f0f3f9] h-screen flex flex-col overflow-hidden">
                <div>
                  <Navbar toggleSidebar={toggleSidebar} />
                  <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
                  <main style={{ padding: "16px" }}>
                    <Routes>
                      <Route path="/adminHome" element={<Admin_HomePage />} />
                      <Route
                        path="/respoSectHome"
                        element={<Respo_Sect_HomePage />}
                      />
                      <Route
                        path="/caissierHome"
                        element={<Caissier_HomePage />}
                      />
                      <Route
                        path="/surveillantHome"
                        element={<Surveillant_HomePage />}
                      />
                      <Route
                        path="/enseignantHome"
                        element={<Enseignant_HomePage />}
                      />
                      <Route
                        path="/etudiantHome"
                        element={<Etudiant_HomePage />}
                      />
                      <Route
                        path="/existingUsersWithoutAccount"
                        element={<ExistingUsersWithoutAccount />}
                      />
                    </Routes>
                  </main>
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
