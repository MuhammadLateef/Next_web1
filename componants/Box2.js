import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Image from 'next/image'

export default function BoxContainer (){
    return(
        <Grid
        container
        sx={{
          width: "90%",
          margin: "5rem auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
        //   border:"2px solid green"
        }}
      >
        <Grid item sm={12} md={5} sx={{ marginTop: "2rem" }}>
          <Image src="/vercel_image1.svg" width={500} height={400} />
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              color: "#6415FF",
              fontSize: "inherit",
              fontFamily: "Inter, system-ui",
            }}
          >
            Our Track Record
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "900",
              lineHeight: "1.25",
            //   fontSize: "claim(1.5rem,2.5rem,3rem)",
            fontSize:"2.7rem",
              marginTop: "1rem",
              letterSpacing: "0.025em",
              color: "#243E63",
              fontFamily: "Inter, system-ui",
            }}
          >
            {" "}
            We have been doing this since{" "}
            <Typography
              
              sx={{
                display: "inline-block",
                fontWeight: "900",
                lineHeight: "1.25",
                // fontSize: "claim(2rem,3rem,3.5rem)",
            fontSize:"2.7rem",
                color: "#6415FF",
              }}
            >
              1999.
            </Typography>{" "}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "claim(0.7rem,1.125rem,1.5rem)",
              color: "var(--textColor)",
              fontWeight: "500",
              lineHeight: "1.625",
              marginTop: "1rem",
              fontFamily: "Inter, system-ui",
              padding: "2px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "flex-start",
              alignItem: "center",
            }}
          >
            <Box sx={{ marginTop: "1rem", marginRight: "3rem" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "",
                  fontSize: "claim(1rem,1.5rem,1.8rem)",
                  fontFamily: "Inter, system-ui",
                  lineHeight: "1.6",
                  color: "var(--dulblack)",
                }}
              >
                2282+
              </Typography>
              <Box style={{ fontWeight: "500", color: "var(--blue)" }}>
                Clients
              </Box>
            </Box>
            <Box sx={{ marginTop: "1rem", marginRight: "3rem" }}>
              <Typography
                style={{
                  fontWeight: "700",
                  fontSize: "1.5rem",
                  fontSize: "claim(1rem,1.5rem,1.8rem)",
                  fontFamily: "Inter, system-ui",
                  lineHeight: "1.6",
                  color: "var(--dulblack)",
                }}
              >
                3891+
              </Typography>
              <Box style={{ fontWeight: "500", color: "var(--blue)" }}>
                Clients
              </Box>
            </Box>
            <Box sx={{ marginTop: "1rem", marginRight: "3rem" }}>
              <Typography
                style={{
                  fontWeight: "700",
                  fontSize: "1.5rem",
                  fontSize: "claim(1rem,1.5rem,1.8rem)",
                  fontFamily: "Inter, system-ui",
                  lineHeight: "1.6",
                  color: "var(--dulblack)",
                }}
              >
                1000+
              </Typography>
              <Box style={{ fontWeight: "500", color: "var(--blue)" }}>
                Clients
              </Box>
            </Box>
          </Box>
          <Button
            sx={{
              marginTop: "2rem",
              display: "inline-block",
              fontSize: "0.875rem",
              backgroundColor: "var(--blue)",
              padding: "0.75rem 2rem",
              fontWeight: "700",
              borderRadius: "0.25rem",
              color: "var(--white)",
              textTransform: "capitalize",
              display: "block",
              "&:hover": { backgroundColor: "var(--dulblack)" },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    )
}