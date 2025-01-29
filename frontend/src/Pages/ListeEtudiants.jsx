import EtudiantsListe from "../components/Listing/EtudiantsListe";
import { Box, Typography } from "@mui/material";

const ListeEtudiants = () => {
  

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}></Typography>
      <EtudiantsListe />
    </Box>
  );
};

export default ListeEtudiants;
