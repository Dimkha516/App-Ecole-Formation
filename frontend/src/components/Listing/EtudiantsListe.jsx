import { useState, useEffect, useRef } from "react";
import DataHandler from "../../Data/DataHandler";
import { IconButton, Tooltip } from "@mui/material";
import { DeleteIcon, EditIcon, InfoIcon } from "lucide-react";
import DataTable from "../DataTable";
import AddStudent from "../forms/AddStudent";
import ShowStudentDetails from "../Popus/Details/ShowEtudiantDetails";

const EtudiantsListe = () => {
  useEffect(() => {
    fetchStudents();
  }, []); // Empty dependency array ensures this effect runs only once on initial render(() => {

  const [allStudents, setAllStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await DataHandler.getDatas("/");
      setAllStudents(response.Etudiants);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditStudent = (id) => {
    alert(`Modifier Etudiant avec l'ID ${id}`);
  };

  const handleDeleteStudent = (id) => {
    alert(`Supprimer Etudiant avec l'ID ${id}`);
  };


  // BLOC SHOW SUDENT DETAILS
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const handleViewStudentDetails = (etudiant) => {
    setSelectedStudent(etudiant);
    setShowStudentDetails(true);
  };

  const addStudentRef = useRef(null);

  const handleOpenModal = () => {
    if (addStudentRef.current) {
      addStudentRef.current.openModal();
    }
  };

  const renderActions = (etudiant) => (
    <>
      <Tooltip title="Voir détails">
        <IconButton
          color="info"
          onClick={() => handleViewStudentDetails(etudiant)}
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Éditer">
        <IconButton
          color="primary"
          onClick={() => handleEditStudent(`Modifier: ${etudiant.id}`)}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Supprimer">
        <IconButton
          color="error"
          onClick={() => handleDeleteStudent(`Supprimer: ${etudiant.id}`)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <>
      <AddStudent ref={addStudentRef}/>
      <DataTable
        title="Gestion Etudiants..."
        data={allStudents}
        columns={[
          // { field: "photo",  headerName: "Photo" },
          {
            field: "photo",
            headerName: "Photo",
            renderCell: (row) => (
              <img
                src={row.photo}
                alt="Profil étudiant"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            ),
          }, 
          { field: "matricule", headerName: "Matricule" },
          { field: "nom", headerName: "Nom" },
          { field: "prenom", headerName: "Prénom" },
          { field: "filiere", headerName: "Filière" },
          { field: "niveauAcademique", headerName: "Niveau" },
          // { field: "telephone", headerName: "Tél" },
          // { field: "email", headerName: "Email" },
        ]}
        searchKeys={["matricule", "nom", "prenom", "telephone", "filiere"]}
        filterKey="filiere"
          filterOptions={[
            { value: "Informatique", label: "Informatique"},
            {value: "Comptabilité-Gestion", label: "Comptabilité-Gestion"},
            {value: "Génie-civil", label: "Génie-civil"},
            {value: "Bureautique", label: "Bureautique"}
          ]}
        renderActions={renderActions}
        functionToExecute={handleOpenModal}
      />
      <ShowStudentDetails
      isOpen={showStudentDetails}
      onClose={() => setShowStudentDetails(false)}
      selectedStudent={selectedStudent}/>
    </>
  );
};

export default EtudiantsListe;
