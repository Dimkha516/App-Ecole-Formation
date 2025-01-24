import { Drawer, ListItem } from "@mui/material";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ open, toggleSidebar }) => {
  const roles = [
    {
      label: "Admin",
      icon: <AdminPanelSettingsIcon />,
      options: [
        { label: "Liste utilisateur", path: "/adminHome" },
        // { label: "Ajouter utilisateur", path: "/admin/ajouter-utilisateur" },
        { label: "Corbeille", path: "/deletdUsers" },
      ],
    },
    {
      label: "Responsable Pédagogique",
      icon: <SchoolIcon />,
      options: [
        { label: "Gestion Filières", path: "/listeFilieres" },
        { label: "Gestion Salles", path: "/listeSalles" },
        { label: "Gestion Cours", path: "/listeCours" },
        { label: "Gestion Enseignants", path: "/listeEnseignants" },
        { label: "Gestion Etudiants", path: "/listeEtudiants" },
        { label: "Notifications", path: "/notificationsRespoSect" },
        { label: "Examens/Evaluations", path: "/listeExamensEvaluations" },
      ],
    },
    {
      label: "Secrétaire",
      icon: <AssignmentIcon />,
      options: [
        { label: "Gestion Filières", path: "/listeFilieres" },
        { label: "Gestion Salles", path: "/listeSalles" },
        { label: "Gestion Cours", path: "/listeCours" },
        { label: "Gestion Enseignants", path: "/listeEnseignants" },
        { label: "Gestion Etudiants", path: "/listeEtudiants" },
        { label: "Notifications", path: "/notifications/respoSect" },
        { label: "Examens/Evaluations", path: "/listeExamensEvaluations" },
      ],
    },
    {
      label: "Surveillant",
      icon: <VisibilityIcon />,
      options: [
        { label: "Planning Evaluations", path: "/planningSurveillant" },
        { label: "Notifications", path: "/notificationsSurveillant" },
      ],
    },
    {
      label: "Caissier",
      icon: <PointOfSaleIcon />,
      options: [
        { label: "Gestion Paiements", path: "/listePaiements" },
        { label: "Rappel de paiements", path: "/rappelPaiements" },
        { label: "Notifications", path: "/notificationsCaissier" },
      ],
    },
    {
      label: "Enseignant",
      icon: <MenuBookIcon />,
      options: [
        { label: "Planning", path: "/planningEnseignant" },
        { label: "Gestion Notes", path: "/enseignantGestionNotes" },
        { label: "Notifications", path: "/notificationsEnseignant" },
        { label: "Gestion Classes", path: "/enseignantClasses" },
      ],
    },
    {
      label: "Étudiant",
      icon: <PersonIcon />,
      options: [
        {label: "Emploi du temps", path: "/planningEtudiant"},
        {label: "Mes notes", path: "/notesEtudiant"},
        {label: "Notifications", path: "/notificationsEtudiant"},
        ],
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);

  // Handle menu open
  const handleOpenMenu = (event, options) => {
    setAnchorEl(event.currentTarget);
    setCurrentOptions(options);
  };

  // Handle menu close
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setCurrentOptions([]);
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 2,
          p: 2,
        }}
      >
        {roles.map((role, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <ListItem onClick={(event) => handleOpenMenu(event, role.options)}>
              <IconButton
                color="primary"
                //   onClick={(event) => handleOpenMenu(event, role.options)}
              >
                {role.icon}
              </IconButton>
              {/* Nom du profil */}
              <Typography
                className="typography"
                variant="body1"
                sx={{ fontWeight: "bold" }}
              >
                {role.label}
              </Typography>
            </ListItem>
          </Box>
        ))}

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {currentOptions.map((option, index) => (
            <MenuItem key={index} onClick={handleCloseMenu}>
              {/* {option} */}
              {/* Lien vers la page associée */}
              <Link
                to={option.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                {option.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Drawer>
  );
};
{
  /* <List>
        <ListItem>
          <ListItemIcon>{AdminPanelSettingsIcon}</ListItemIcon>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="ADMIN" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="ABOUT" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="CONTACT" />
            </ListItemButton>
          </ListItem>
      </List> */
}
export default Sidebar;
