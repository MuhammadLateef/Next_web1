import * as React from "react";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid
      sx={{
        maxWidth: "100%",
        // height: "103vh",
        border: "2px solid red",
        position: "relative",
        marginTop: "-2rem",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage:'linear-gradient(rgba(100, 21 ,255, 30%),rgba(100, 21 ,255, 30%)),url("/bg_img1.avif")',
      }}
      container
      spacing={2}
      alignItems="stretch"
    >
      <Grid item xs={12} sx={{ width: "100%", margin: "13rem 3rem"}}>
        <Grid
          container
          justifyContent="space-between"
          spacing={spacing}
          sx={{ flex: "1.2", display: "flex", justifyContent: "space-between",alignItems:"center" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              sx={{
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "inline-block",
                borderLeftWidth: "4px",
                borderOpacity: "1",
                borderColor: "blue",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "0.75rem",
                fontsize: "0.875rem",
                fontweight: "500",
                color: "#fff",
              }}
            >
              We have now launched operations in Europe.
            </Typography>
            <Typography
              sx={{
                fontSize : 'clamp(1.9rem, 3.2vw, 3rem)',
                // fontSize: "3rem",
                fontWeight: "900",
                color: "#fff",
              }}
              variant="subtitle1"
            >
              Hire the best
            </Typography>
            <Box
              sx={{
                transform: "skew(-20deg, 0deg)",
                backgroundColor: "#fff",
                display: "inline-block",
                padding: "0px 1rem",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  fontSize : 'clamp(1.9rem, 3.2vw, 3rem)',
                  fontWeight: "900",
                  transform: "skew(20deg, 0deg)",
                  // transform:'rotate(3deg)',
                  backgroundColor: "#fff",

                  color: "#6415FF",
                }}
              >
                Marketing Team.
              </Typography>{" "}
            </Box>
            <br />
            <Button
              sx={{
                marginTop: "3.5rem",
                padding: "0.75em 2em",
                fontWeight: "700",
                // fontSize: "0.05vw",
                fontSize: "1rem",
                fontSize: "claim(0.3rem,1rem,1.2rem)",
                fontWeight: "700",
                color: "#6415FF",
                backgroundColor: "#fff",
                transitionDuration: "3000ms",
                textTransform: "capitalize",
              }}
            >
              Read Customer Stories
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{  }}>
          <video autoPlay loop style={{maxWidth: "100%", height: "auto",borderRadius:"10px" }}>
          {/* <video autoPlay loop sx={{}}> */}
            <source src="/Vedios/video.mp4" />
          </video>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
