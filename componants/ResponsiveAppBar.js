import * as React from "react";
import  AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
const pages = ["About", "Blog", "Location", "Pricing"];
const settings = ["About", "Blog", "Location", "Logout"];

const drawerWidth = 240;
export default function ResponsiveAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Treact
      </Typography>
      <Divider />
      <List>
        {settings.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText sx={{textTransform:"capitalize"}} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{zIndex:999}}>
      <Container maxWidth="xl" sx={{ paddingTop: "2rem" }}>
        <Toolbar disableGutters sx={{ margin: "0rem 2rem" }}>
          <Box sx={{ flexGrow: 0 }}></Box>
          <Typography sx={{ display: { xs: "none", md: "flex" } }}>
            <Image
              width={40}
              height={40}
              // fill
              src="/logo.2c489fc453a1783cbadacf914efa3df6.svg"
            />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              textDecoration: "none",
              fontWeight: 900,
              color: "#fff",
              marginLeft: "0px",
              fontSize: "1.5rem",
              letterSpacing: " 0.025em",
              marginLeft: 1,
            }}
          >
            Treact
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ mr: 2, width: "40px", height: "45px" ,color:"#fff" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              // container={container}
              variant="temporary"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Typography sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image
              width={40}
              height={40}
              src="/logo.2c489fc453a1783cbadacf914efa3df6.svg"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            href="/"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              // fontFamily: "monospace",
              textDecoration: "none",
              fontWeight: 900,
              color: "#fff",
              marginLeft: "0px",
              fontSize: "1.5rem",
              letterSpacing: " 0.025em",
            }}
          >
            Treact
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                disableRipple
                disableFocusRipple
                href="/"
                onClick={handleCloseNavMenu}
                sx={{
                  margin: "0px 1.5rem",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  color: "white",
                  display: "block",
                  textTransform:"capitalize"
                  // fontFamily: "monospace",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            sx={{
              padding: "0.7% 2.5%",
              borderRadius: "0.25rem",
              backgroundColor: "#6415FF",
              fontSize: "0.875rem",
              fontWeight: "600",
              letterSpacing: "0.025em",
              color: "#fff",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "#1976d2" },
            }}
            color="inherit"
          >
            Hire Us
          </Button>
        </Toolbar>
        <Box component="nav"></Box>
      </Container>
    </AppBar>
  );
}
