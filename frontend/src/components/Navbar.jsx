import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="static" style={{ marginTop: "-28px" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GESTION ECOLE
        </Typography>
      </Toolbar>
    </AppBar>
  ); 
};

export default Navbar;
