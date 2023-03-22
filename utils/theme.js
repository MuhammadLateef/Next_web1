import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      // paper: "#0f9688",
      // default: "ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui",
    Button: {
      textTransform: "capitalize",
    },
  },

  components: {
    // Name of the component
    
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#00800000",
          boxShadow:"none",
        },
      },
    },
   
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        // root: {
        //   "&:hover": { backgroundColor: "#1976d2" },
        // },
      },
    },
  },
});
