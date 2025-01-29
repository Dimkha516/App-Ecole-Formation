import { useEffect, useRef, useState } from "react";
import DataHandler from "../../Data/DataHandler";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import DataTable from "../DataTable";
import AddFiliere from "../forms/AddFiliere";

const FilieresListe = () => {

  useEffect(() => {
    fetchFilieres();
  }, []);

  const [allFilieres, setAllFilieres] = useState([]);

  const fetchFilieres = async () => {
    try {
      const response = await DataHandler.getDatas("/");
      setAllFilieres(response.Filieres);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFiliere = (id) => {
    alert(`Modifier Filière avec l'ID ${id}`);
  };

  const handleDeleteFiliere = (id) => {
    alert(`Supprimer Filière avec l'ID ${id}`);
  };

  const handleViewDetails = (id) => {
    alert(`Afficher les détails de Filière avec l'ID ${id}`);
  };

  const addFiliereRef = useRef(null);
  
  const handleOpenModal = () => {
    if (addFiliereRef.current) {
      addFiliereRef.current.openModal();
    }
  };

  const renderActions = (filiere) => (
    <>
      <Tooltip title="Voir détails">
        <IconButton color="info" onClick={() => handleViewDetails(filiere.id)}>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Éditer">
        <IconButton
          color="primary"
          onClick={() => handleEditFiliere(`Modifier: ${filiere.id}`)}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Supprimer">
        <IconButton
          color="error"
          onClick={() => handleDeleteFiliere(`Supprimer: ${filiere.id}`)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <>
    <AddFiliere ref={addFiliereRef}/>
    <DataTable
      title="Gestion Filieres"
      data={allFilieres}
      columns={[
        { field: "titre", headerName: "Titre Filière" },
        { field: "domaine", headerName: "Domaine" },
        { field: "niveauAcademique", headerName: "Niveaux Academ."},
        { field: "nombreInscrits", headerName: "Total Inscrits" },
      ]}
      searchKeys={["titre", "domaine", "niveauAcademique"]}
      
      
    
      filterKey="domaine"
      filterOptions={[
        { value: "Informatique", label: "Informatique"},
        { value: "Gestion", label: "Gestion"},
        { value: "Communication", label: "Communication"},
        { value: "BTP", label: "BTP"},
        { value: "Industrie", label: "Industrie"}
      ]}
      renderActions={renderActions}
      functionToExecute={handleOpenModal}
    />
    </> 
  );
};

export default FilieresListe;
