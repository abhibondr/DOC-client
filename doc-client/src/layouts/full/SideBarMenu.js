// rafce
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import adminRoutes from "../../shared/routes/adminRoutes";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Link = styled(NavLink)({ textDecoration: "none" });

const SideBarMenu = ({ open }) => {
  return (
    <>
      <List>
        {Array.isArray(adminRoutes) &&
          adminRoutes.map(({ label, path, icon }, index) => (
            <ListItem
              key={label + path}
              disablePadding
              sx={{ display: "block" }}
            >
              <Link
                to={`/secured/${path}`}
                style={({ isActive }) => ({
                  color: isActive ? "#999" : "#000",
                })}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default SideBarMenu;
