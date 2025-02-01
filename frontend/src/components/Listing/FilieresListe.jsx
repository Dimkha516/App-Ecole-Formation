import { useEffect, useRef, useState } from "react";
import DataHandler from "../../Data/DataHandler";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import DataTable from "../DataTable";
import AddFiliere from "../forms/AddFiliere";
import ShowFilierDetails from "../Popus/Details/ShowFiliereDetails";
// import EditFiliere from "../Popus/Edits/EditFiliere";

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

  // BLOC SHOW FILIERE DETAILS:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiliere, setSelectedFiliere] = useState(null);
  const handleViewDetails = (filiere) => {
    setSelectedFiliere(filiere);
    setIsModalOpen(true);
  };

  // // BLOC EDIT FILIERE:
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [editedFiliere, setEditedFiliere] = useState(null);
  // const handleEditFiliere = (filiere) => {
  //   setEditedFiliere(filiere);
  //   // setIsEditModalOpen(true);
  //   setIsModalOpen(true);
  // };

  
  // BLOC DELETE FILIERE:
  const handleDeleteFiliere = (id) => {
    alert(`Supprimer Filière avec l'ID ${id}`);
  };



  // BLOC AJOUT FILIERE:
  const addFiliereRef = useRef(null);
  const handleOpenModal = () => {
    if (addFiliereRef.current) { 
      addFiliereRef.current.openModal();
    }
  };

  const renderActions = (filiere) => (
    <>
      <Tooltip title="Voir détails">
        <IconButton color="info" onClick={() => handleViewDetails(filiere)}>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Éditer">
        <IconButton
          color="primary"
          // onClick={() => handleEditFiliere(filiere)}
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
      <AddFiliere ref={addFiliereRef} />
      <DataTable
        title="Gestion Filieres"
        data={allFilieres}
        columns={[
          { field: "titre", headerName: "Titre Filière" },
          { field: "domaine", headerName: "Domaine" },
          { field: "niveauAcademique", headerName: "Niveaux Academ." },
          { field: "nombreInscrits", headerName: "Total Inscrits" },
        ]}
        searchKeys={["titre", "domaine", "niveauAcademique"]}
        filterKey="domaine"
        filterOptions={[
          { value: "Informatique", label: "Informatique" },
          { value: "Gestion", label: "Gestion" },
          { value: "Communication", label: "Communication" },
          { value: "BTP", label: "BTP" },
          { value: "Industrie", label: "Industrie" },
        ]}
        renderActions={renderActions}
        functionToExecute={handleOpenModal}
      />
      <ShowFilierDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedFiliere={selectedFiliere}
      />
      {/* <EditFiliere
        isEditOpen={isEditModalOpen}
        onEditClose={() => setIsEditModalOpen(false)}
        editedFiliere={editedFiliere}
      /> */}
    </>
  );
};

export default FilieresListe;
