// import { Box, Typography } from "@mui/material";

import { useEffect, useRef, useState } from "react";
import DataHandler from "../../Data/DataHandler";
import { IconButton, Tooltip } from "@mui/material";
import { DeleteIcon, EditIcon, InfoIcon } from "lucide-react";
import AddEnseignant from "../forms/AddEnseignant";
import DataTable from "../DataTable";

const EnseignantsListe = () => {
  useEffect(() => {
    getAllEnseignants();
  }, []);

  const [allEnseignants, setAllEnseignants] = useState([]);
  const getAllEnseignants = async () => {
    try {
      const response = await DataHandler.getDatas("/");
      setAllEnseignants(response.Enseignants);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditEnseignant = (id) => {
    alert(`Modifier Enseignant avec l'ID ${id}`);
  };

  const handleDeleteEnseignant = (id) => {
    alert(`Supprimer Enseignant avec l'ID ${id}`);
  };

  const handleViewEnseignantDetails = (id) => {
    alert(`Afficher les détails de l'Enseignant avec l'ID ${id}`);
  };

  const addEnseignantRef = useRef(null);

  const handleOpenModal = () => {
    if (addEnseignantRef.current) { 
      addEnseignantRef.current.openModal();
    }
  };

  const renderActions = (enseignant) => (
    <>
      <Tooltip title="Voir détails">
        <IconButton
          color="info"
          onClick={() => handleViewEnseignantDetails(enseignant.id)}
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Éditer">
        <IconButton
          color="primary"
          onClick={() => handleEditEnseignant(`Modifier: ${enseignant.id}`)}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Supprimer">
        <IconButton
          color="error"
          onClick={() => handleDeleteEnseignant(`Supprimer: ${enseignant.id}`)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <>
      <AddEnseignant ref={addEnseignantRef} />
      <DataTable
        title="Gestion Enseignants"
        data={allEnseignants}
        columns={[
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
          {"field": "matricule", "headerName": "Matricule"},
          {"field": "prenom", "headerName": "Prénom"},
          {"field": "nom", "headerName": "nom"},
          {"field": "specialite", "headerName": "Spécialité"},
        ]}
        searchKeys={["matricule", "nom", "prenom"]}
        renderActions={renderActions}
        functionToExecute={handleOpenModal}
      />
    </>
  );
};

export default EnseignantsListe;
