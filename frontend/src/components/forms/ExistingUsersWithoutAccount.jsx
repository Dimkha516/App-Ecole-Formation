import { useEffect, useState } from "react";
import DataHandler from "../../Data/DataHandler";
import DataTable from "../DataTable";

const ExistingUsersWithoutAccount = () => {
  // const [teachearsWithoutAccount, setTeachearsWithoutAccount] = useState([]);

  // TOUS LES ETUDIANTS SANS COMPTE UTILISATEURS:
  // const [STUDENTSWithoutAccount, setStudentsWithoutAccount] = useState("");

  // TABLE COMPTES UTILISATEURS POUR Y RECHERCHER ENSEIGNANTS ET ETUDIANTS:
  // const [users, setUsers] = useState("");

  useEffect(() => {
    fetchTeachersAndStudents();
  }, []);

  const [usersWithoutAccount, setUsersWithoutAccount] = useState([]);

  //TOUS LES ENSEIGNANTS ET ETUDIANTS SANS COMPTE UTILISATEURS:
  const fetchTeachersAndStudents = async () => {
    try {
      const response = await DataHandler.getDatas("/");
      setUsersWithoutAccount([...response.Enseignants, ...response.Etudiants]);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "matricule", headerName: "matricule", width: 170 },
    { field: "prenomNom", headerName: "prenom Nom", width: 180 },
    { field: "email", headerName: "email", width: 180 },
    { field: "profil", headerName: "profile", width: 95 },
  ];

  const rows2 = usersWithoutAccount.map((user) => ({
    id: user.userID,
    matricule: user.matricule,
    prenomNom: user.nom + " " + user.prenom,
    email: user.email,
    profil: user.profil,
  }));

  return (
    <>
      <h2>Liste des utilisateurs Sans compte</h2>
      <DataTable
        title="Liste des utilisateurs Sans compte"
        data={rows2}
        columns={columns}
        searchKeys={["matricule", "prenomNom"]}
        filterOptions={[
          { value: "enseignant", label: "Enseignant" },
          { value: "étudiant", label: "Etudiant" },
        ]}
      />
    </>
  );
};
export default ExistingUsersWithoutAccount;
