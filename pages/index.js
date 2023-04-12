import styles from "../styles/Home.module.css";
import ResponsiveAppBar from "../componants/ResponsiveAppBar";
import ProfessionalServices from "../componants/professionalServices";
import Box2 from "../componants/Box2";
import Home2 from "../componants/Home2"
import ProfessionalTeam from "../componants/ProfessionalTeam";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
 return (
   <div className={styles.container}>
     <ResponsiveAppBar />
      <Home2 />
      <Box2 />
      <ProfessionalServices />
      <ProfessionalTeam />
   </div>
 );
}