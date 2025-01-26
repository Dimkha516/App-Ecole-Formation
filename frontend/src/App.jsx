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
import DeletedUser from "./Pages/DeledUsers";
import ListeFilieres from "./Pages/ListeFilieres";
import ListeSalles from "./Pages/ListeSalles";
import ListeCours from "./Pages/ListeCours";
import ListeEnseigants from "./Pages/ListeEnseignants";
import ListeEtudiants from "./Pages/ListeEtudiants";
import NotificationsRespoSect from "./Pages/NotifResSec";
import ListeExamEval from "./Pages/ListeExamEval";
import PlanningSurveillant from "./Pages/PlanningSurveillant";
import NotifSurveillant from "./Pages/NotifSurveillant";
import ListePaiements from "./Pages/ListePaiements";
import RappelPaiements from "./Pages/RappelPaiements";
import NotifCaissier from "./Pages/NotifCaissier";
import PlanningEnseignant from "./Pages/PlanningEnseignant";
import EnseignantGestionNotes from "./Pages/EnseignantGestionNotes";
import NotifEnseignant from "./Pages/NotifEnseignant";
import EnseignantClasses from "./Pages/EnseignantClasse";
import PlanningEtudiant from "./Pages/PlanningEtudiant";
import NotesEtudiant from "./Pages/NotesEtudiant";
import NotifEtudiant from "./Pages/NotifEtudiant";
import ListePresences from "./Pages/Presences";

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
                      <Route path="/deletdUsers" element={<DeletedUser />} />
                      <Route
                        path="/listeFilieres"
                        element={<ListeFilieres />}
                      />
                      <Route path="/listeSalles" element={<ListeSalles />} />
                      <Route path="/listeCours" element={<ListeCours />} />
                      <Route
                        path="/listeEnseignants"
                        element={<ListeEnseigants />}
                      />
                      <Route
                        path="/listeEtudiants"
                        element={<ListeEtudiants />}
                      />
                      <Route
                        path="/listePresences"
                        element={<ListePresences />}
                      />
                      <Route
                        path="/notificationsRespoSect"
                        element={<NotificationsRespoSect />}
                      />
                      <Route
                        path="/listeExamensEvaluations"
                        element={<ListeExamEval />}
                      />
                      <Route
                        path="/planningSurveillant"
                        element={<PlanningSurveillant />}
                      />
                      <Route
                        path="/notificationsSurveillant"
                        element={<NotifSurveillant />}
                      />
                      <Route
                        path="/listePaiements"
                        element={<ListePaiements />}
                      />
                      <Route
                        path="/rappelPaiements"
                        element={<RappelPaiements />}
                      />
                      <Route
                        path="/notificationsCaissier"
                        element={<NotifCaissier />}
                      />
                      <Route
                        path="/planningEnseignant"
                        element={<PlanningEnseignant />}
                      />
                      <Route
                        path="/enseignantGestionNotes"
                        element={<EnseignantGestionNotes />}
                      />
                      <Route
                        path="/notificationsEnseignant"
                        element={<NotifEnseignant />}
                      />
                      <Route
                        path="/enseignantClasses"
                        element={<EnseignantClasses />}
                      />
                      <Route
                        path="/planningEtudiant"
                        element={<PlanningEtudiant />}
                      />
                      <Route
                        path="/notesEtudiant"
                        element={<NotesEtudiant />}
                      />
                      <Route
                        path="/notificationsEtudiant"
                        element={<NotifEtudiant />}
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
