import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function ProfessionalTeam() {
  return (
    <Grid container sx={{width:"95%", height:"auto" ,margin:"4rem auto",}}>
      <Grid item sm={12} md={6}>
        <Typography variant="h5" sx={{fontWeight: '700',color:"var(--blue)",}}>Our Expertise</Typography>
        <Typography variant="h2"sx={{fontSize:'3rem',fontWeight: '900', letterSpacing: '0.025em',color:"var(--dulblack)"}} >
          We have the most <span style={{color:"var(--blue)"}}>professional</span> marketing team.
        </Typography>
        <Typography variant="p" sx={{color:"var(--textColor)",fontFamily: "Inter, system-ui",marginTop: "1rem", textAlign: "center", fontSize: "1.125rem", fontWeight:'500',lineHeight: '1.625',}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Grid>
      <Grid
        sm={12}
        md={6}
        item
        sx={{
          backgroundImage: `url('/professional_1.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        //   width: "100%",
          height: "76vh",
        }}
      >
        {" "}
      </Grid>
    </Grid>
  );
}
