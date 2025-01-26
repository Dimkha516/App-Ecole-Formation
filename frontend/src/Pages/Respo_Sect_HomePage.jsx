import {
  AcademicCapIcon,
  BellIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import CardDisplay from "../components/CardDisplay";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
// import { useEffect, useState } from "react";
// import DataHandler from "../Data/DataHandler";

// Auto complete: yesS
function Respo_Sect_HomePage() {
  //---------------------- DONNEES A RECUPERER DANS LA BASE DE DONNEES:
  // const [filieresDatas, setFilieresDatas] = useState([]);
  // const [cours, setCours] = useState([]);
  // const [etudiants, setEtudiants] = useState([]);
  // const [enseignants, setEnseignants] = useState([]);
  // const [presences, setPresences] = useState([]);
  // const [evalExam, setEvalExam] = useState([]);
  // const [notifications, setNotification] = useState([]);
  // const [notes, setNotes] = useState([]);
  // const [salles, setSalles] = useState([]);

  // // <></>
  // useEffect(() => {
  //   fetchDatasForCards();
  // },[]);

  // const fetchDatasForCards = async () => {
  //     try{
  //       const response = await DataHandler.getDatas("/");
  //       setFilieresDatas(response.Filieres);
  //     }
  //     catch(error){
  //       console.log(error)
  //     }
  // }

  const cardsData = [
    {
      title: "Gestion Filières",
      attributes: [
        { label: "Nombre de filières", value: 12 },
        { label: "Filière la plus demandée", value: "Informatique" },
      ],
      link: "/listeFilieres",
      icon: AcademicCapIcon,
    },
    {
      title: "Gestion Cours",
      attributes: [{ label: "Total cours", value: 18 }],
      link: "/listeCours",
      icon: BookOpenIcon,
    },
    {
      title: "Gestion Étudiants",
      attributes: [
        { label: "Nombre d'étudiants", value: 325 },
        { label: "Garçons", value: 163 },
        { label: "Filles", value: 162 },
      ],
      link: "/listeEtudiants",
      icon: UserGroupIcon,
    },
    {
      title: "Gestion Enseignants",
      attributes: [
        { label: "Total", value: 22 },
        { label: "Hommes", value: 20 },
        { label: "Femmes", value: 12 },
      ],
      link: "/listeEnseignants",
      icon: UserGroupIcon,
    },
    {
      title: "Gestion Présences",
      attributes: [{ label: "Taux d'absences", value: 18 }],
      link: "/listePresences",
      icon: CalendarDaysIcon,
    },

    {
      title: "Gestion Exam/Evaluations",
      attributes: [
        { label: "Effectués", value: 32 },
        { label: "Programmés", value: 11 },
        { label: "Annulés", value: 5 },
      ],
      link: "/listeExamensEvaluations",
      icon: DocumentTextIcon,
    },

    {
      title: "Gestion Notifications",
      attributes: [{ label: "Envoyées", value: 70 }],
      link: "/notificationsRespoSect",
      icon: BellIcon,
    },
    {
      title: "Gestion Notes",
      attributes: [
        { label: "Notes saisies ce mois", value: 150 },
        { label: "Moyenne générale", value: "14.5" },
      ],
      link: "/login",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Gestion Salles de classe",
      attributes: [
        { label: "Total", value: 13 },
        { label: "Disponibles", value: "3" },
        { label: "Occupées", value: "10" },
      ],
      link: "/listeSalles",
      icon: BuildingOfficeIcon,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tableau de Bord</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <CardDisplay
            key={index}
            title={card.title}
            attributes={card.attributes}
            link={card.link}
            icon={card.icon}
          />
        ))}
      </div>
      {/* {filieresDatas ? console.log(filieresDatas) : ""
      } */}
    </div>
  );
}

export default Respo_Sect_HomePage;
