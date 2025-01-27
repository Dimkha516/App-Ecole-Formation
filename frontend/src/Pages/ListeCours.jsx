import { Calendar, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import DataHandler from "../Data/DataHandler";
import Pagination from "../Utils/CardPagination";
const ListeCours = () => {
  useEffect(() => {
    getSessionsCours();
  }, []);

  const [sessionsCours, setSessionsCours] = useState([]);

  const getSessionsCours = async () => {
    try {
      const response = await DataHandler.getDatas("/");
      setSessionsCours(response.SessionCours);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  const [filiereSelectionnee, setFiliereSelectionnee] = useState("all");
  const [niveauSelectionne, setNiveauSelectionne] = useState("all");
  const [jourSelectionne, seJourSelectionne] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const filieres = [...new Set(sessionsCours.map((s) => s.filiere))];
  const niveaux = [...new Set(sessionsCours.map((s) => s.niveau))];
  const jours = [...new Set(sessionsCours.map((s) => s.jour))];

  //   const sessionsFiltrees = sessions.filter((session) => {
  const sessionsFiltrees = sessionsCours.filter((session) => {
    if (
      filiereSelectionnee !== "all" &&
      session.filiere !== filiereSelectionnee
    )
      return false;

    if (niveauSelectionne !== "all" && session.niveau !== niveauSelectionne)
      return false;
    
    if(jourSelectionne !== "all" &&  session.jour !== jourSelectionne)
    return false;
    
    return true;
  });

   // Ajout des états pour la pagination
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5; // Nombre de sessions par page

   // Calculer les sessions à afficher pour la page courante
   const indexOfLastSession = currentPage * itemsPerPage;
   const indexOfFirstSession = indexOfLastSession - itemsPerPage;
   const currentSessions = sessionsFiltrees.slice(indexOfFirstSession, indexOfLastSession);
  
    // Gérer le changement de page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Remonter en haut de la page
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6 flex items-center gap-4">
        <select
          className="p-2 border rounded-md w-48 bg-white"
          value={filiereSelectionnee}
          onChange={(e) => setFiliereSelectionnee(e.target.value)}
        >
          <option value="all">Toutes les filières</option>
          {filieres.map((filiere) => (
            <option key={filiere} value={filiere}>
              {filiere}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded-md w-48 bg-white"
          value={niveauSelectionne}
          onChange={(e) => setNiveauSelectionne(e.target.value)}
        >
          <option value="all">Tous les niveaux</option>
          {niveaux.map((niveau) => (
            <option key={niveau} value={niveau}>
              {niveau}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded-md w-48 bg-white"
          value={jourSelectionne}
          onChange={(e) => seJourSelectionne(e.target.value)}
        >
          <option value="all">Tous les Jours</option>
          {jours.map((jour) => (
            <option key={jour} value={jour}>
              {jour}
            </option>
          ))}
        </select>

        <button
          onClick={() => setShowModal(true)}
          className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700"
        >
          <Plus className="mr-2 h-4 w-4" /> Ajouter une session
        </button>
      </div>

      <div className="grid gap-4">
        {currentSessions.map(session => (
        // {sessionsFiltrees.map((session) => (
          <div key={session.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{session.cours}</h3>
              <span className="text-sm text-gray-500">
                {session.filiere} - {session.niveau}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>{session.jour}</span>
                <span className="text-gray-500">  
                  {session.heure_debut} - {session.heure_fin}
                </span>
              </div>
              <div className="text-right">
                <div className="font-medium">{session.enseignant}</div>
                <div className="text-sm text-gray-500">{session.salle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
        
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[600px] max-w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">
              Ajouter une nouvelle session de cours
            </h2>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Filière
                  </label>
                  <input
                    type="text"
                    name="filiere"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Niveau
                  </label>
                  <input
                    type="text"
                    name="niveau"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cours</label>
                <input
                  type="text"
                  name="cours"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Professeur
                  </label>
                  <input
                    type="text"
                    name="professeur"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Salle
                  </label>
                  <input
                    type="text"
                    name="salle"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Heure de début
                  </label>
                  <input
                    type="time"
                    name="heureDebut"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Heure de fin
                  </label>
                  <input
                    type="time"
                    name="heureFin"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Pagination
        totalItems={sessionsFiltrees.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ListeCours;
