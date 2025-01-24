import { Box, Typography } from "@mui/material";
import UsersList from "../components/Listing/UsersList";


const Admin_HomePage = () => {

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        Liste des utilisateurs
      </Typography>
      <UsersList />
    </Box>
  );
};

export default Admin_HomePage;
