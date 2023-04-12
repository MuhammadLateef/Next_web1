import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

let Box_Content = [
  {
    img: "/box_img1.svg",
    h3: "Ads Management",
    paragraph:
      " We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.",
  },
  {
    img: "/box_img3.svg",
    h3: "Video Marketing",
    paragraph:
      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
  },
  {
    img: "/box_img2.svg",
    h3: "Customer Relation",
    paragraph:
      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
  },
  {
    img: "/box_image4.svg",
    h3: "Product Outreach",
    paragraph:
      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
  },
  {
    img: "/box_image5.svg",
    h3: "PR Campaign",
    paragraph:
      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
  },
  {
    img: "box_image6.svg",
    h3: "Product Expansion",
    paragraph:
      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.",
  },
];

export default function professionalServices() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          overflow: "hidden",
          padding: "2rem",
          fontFamily: "Inter, system-ui",
          fontSize: "3rem",
          textAlign: "center",
          fontWeight: "900",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          letterSpacing: " 0.025em",
          color: "var(--dulblack)",
        }}
      >
        Our Professional <span style={{ color: "var(--blue)" }}>Services</span>{" "}
      </Typography>

      <Grid
        container
        sx={{
          width: "85%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          flexWrap: "wrap",
        }}
      >
        {Box_Content.map((items, id) => (
          <Box
            container
            spacing={2}
            sx={{}}
            key={id}
          >
            <Box
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "3rem",
                display: "flex",
                maxWidth: "20rem",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0.5rem",
                borderWidth: "2px",
                borderStyle: "dashed",
                borderColor: "var(--blue)",
                padding: "2.5rem 1.5rem",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  flexShrink: "0",
                  borderRadius: "9999px",
                  border: "2px solid var(--blue)",
                  padding: "1.5rem",
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                <Image src={items.img} width={32} height={32} />
              </Box>
              <Box
                sx={{
                  marginTop: "1.5rem",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    marginTop: "0.5rem",
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    lineHeight: "1",
                    color: "var(--blue)",
                  }}
                >
                  {items.h3}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "0.75rem",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    lineHeight: "2",
                    color: "var(--textColor)",
                  }}
                >
                  {items.paragraph}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
