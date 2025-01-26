import { Box, Typography } from "@mui/material";
import FilieresListe from "../components/Listing/FilieresListe";

const ListeFilieres = () => {
    return (
        <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
      </Typography>
      <FilieresListe />
    </Box>

    );
};
export default ListeFilieres;