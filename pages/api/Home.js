import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "103vh",
        // border: "2px solid red",
        position: "relative",
        marginTop: "-2rem",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: 'linear-gradient(rgba(100, 21 ,255, 30%),rgba(100, 21 ,255, 30%)),url("/bg_img1.avif")',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "3rem",
          // border: "2px solid green",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: "1.2", marginLeft: "2rem" }}>
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
              fontSize: "3rem",
              fontWeight: "900",
              color: "#fff",
            }}
            variant="subtitle1"
          >
            Hire the best
          </Typography>
          <Box sx={{transform: "skew(-20deg, 0deg)",backgroundColor: "#fff",display: "inline-block",padding: "0px 1rem",}}>
          <Typography
            sx={{
              display: "inline-block",
              fontSize: "3rem",
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
              marginTop:"3.5rem",
              padding: "0.75rem 2rem",
              fontWeight:"700",
              fontSize: "1rem",
              fontWeight: "700",
              color:"#6415FF",
              backgroundColor:"#fff",
              transitionDuration:"3000ms",
              textTransform:"capitalize"
            }}
          >
            Read Customer Stories
          </Button>
        </Box>
        <Box sx={{ flex: "1" }}>
          <video autoPlay loop style={{ width: "550px", height: "500px" }}>
            <source src="/Vedios/video.mp4" />
          </video>
        </Box>
      </Container>
    </Box>
  );
}
