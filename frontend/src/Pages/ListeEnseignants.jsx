import { Box, Typography } from "@mui/material";
import EnseignantsListe from "../components/Listing/EnseignantsListe";

const ListeEnseigants = () => {
    return (
        <Box sx={{p: 3}}>
            <Typography variant="h3" sx={{fontWeight: "bold", mb: 3}}></Typography>
            <EnseignantsListe />
        </Box>
    );
};

export default ListeEnseigants;