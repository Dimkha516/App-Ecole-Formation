import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import DataHandler from "../../Data/DataHandler";
import AddUser from "../forms/AddUser";
import DataTable from "../DataTable";

const UsersList = () => {
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await DataHandler.getDatas("/");
      setAllUsers(response.Utilisateurs);
    } catch (error) {
      console.log(error);
    }
  };
  const [allUsers, setAllUsers] = useState([]);

  // const handleAddUser = () => {
  //   alert("Ajouter un utilisateur");
  // };

  // const handleEditUser = (id) => {
  //   alert(`Modifier l'utilisateur avec l'ID ${id}`);
  // };

  // const handleDeleteUser = (id) => {
  //   alert(`Supprimer l'utilisateur avec l'ID ${id}`);
  // };

  const handleViewDetails = (userID) => {
    alert(`Afficher les détails de l'utilisateur avec l'ID ${userID}`);
  };


  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleFilterChange = (event) => {
  //   setSelectedProfil(event.target.value);
  // };

  const addUserRef = useRef(null);

  const handleOpenModal = () => {
    if (addUserRef.current) {
      addUserRef.current.openModal(); // Appel de la méthode d'instance
    }
  };

  const renderActions = (user) => (
    <>
      <Tooltip title="Voir détails">
        <IconButton
          color="info"
          onClick={() => handleViewDetails(user.userID)}
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Éditer">
        <IconButton
          color="primary"
          onClick={() => alert(`Modifier: ${user.id}`)}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Supprimer">
        <IconButton
          color="error"
          onClick={() => alert(`Supprimer: ${user.id}`)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Box>
      <Tooltip title="Ajouter un utilisateur">
        <IconButton color="primary" onClick={handleOpenModal}>
          <AddCircleIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Tooltip>
      <AddUser ref={addUserRef} />
      <DataTable
        title="Liste des utilisateurs"
        data={allUsers}
        columns={[
          { field: "nom", headerName: "Nom" },
          { field: "prenom", headerName: "Prénom" },
          { field: "email", headerName: "Email" },
          { field: "profil", headerName: "Profil" },
        ]}
        searchKeys={["nom", "prenom", "email"]}
        filterOptions={[
          { value: "Admin", label: "Admin" },
          {
            value: "Responsable Pédagogique",
            label: "Responsable Pédagogique",
          },
          { value: "Surveillant", label: "Surveillant" },
          { value: "Enseignant", label: "Enseignant" },
          { value: "Étudiant", label: "Étudiant" },
        ]}
        renderActions={renderActions}
      />
    </Box>
  );
};

export default UsersList;
