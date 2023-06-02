import * as React from "react";
// import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import frontendRoutes from "../../shared/routes/frontendRoutes";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

const Header = (props) => {
  const Link = styled(NavLink)({
    textDecoration: "none",
    marginRight: 10,
  });
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DocMet
      </Typography>
      <Divider />

      <List>
        {frontendRoutes
          ?.filter(({ showInMenu }) => showInMenu)

          .map(({ label, path }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }} to={path}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "65px" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block" } }}
          >
            <MonitorHeartIcon sx={{ fontSize: 55 }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            DocMet
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {Array.isArray(frontendRoutes) &&
              frontendRoutes
                ?.filter(({ showInMenu }) => showInMenu)
                .map(({ path, label }, i) => (
                  <Link
                    key={path + i}
                    to={path}
                    style={({ isActive }) => ({
                      color: isActive ? "#999" : "#fff",
                    })}
                  >
                    {label}
                  </Link>
                ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

// Header.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Header;
