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
        { label: "Ajouter utilisateur", path: "/admin/ajouter-utilisateur" },
        { label: "Corbeille", path: "/admin/corbeille" },
      ],
    },
    {
      label: "Responsable Pédagogique",
      icon: <SchoolIcon />,
      options: [
      {label: "Gestion Filières", path:"admin/"},
      {label: "Gestion Salles"},
      {label: "Gestion Cours"},
      {label: "Gestion Enseignants"},
      {label: "Gestion Etudiants"},
      {label: "Notifications"},
      {label: "Examens/Evaluations"},
       ],
    },
    {
      label: "Secrétaire",
      icon: <AssignmentIcon />,
      options: [
        "Gestion Filières",
        "Gestion Salles",
        "Gestion Cours",
        "Gestion Enseignants",
        "Gestion Etudiants",
        "Notifications",
        "Examens/Evaluations",
      ],
    },
    {
      label: "Surveillant",
      icon: <VisibilityIcon />,
      options: ["Planning Evaluations", "Notifications"],
    },
    {
      label: "Caissier",
      icon: <PointOfSaleIcon />,
      options: ["Gestion Paiements", "Rappel de paiements", "Notifications"],
    },
    {
      label: "Enseignant",
      icon: <MenuBookIcon />,
      options: [
        "Planning",
        "Gestion Notes",
        "Notifications",
        "Gestion Classes"
    ],
    },
    {
      label: "Étudiant",
      icon: <PersonIcon />,
      options: [
        "Emploi du temps",
        "Notes",
        "Notifications",
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
