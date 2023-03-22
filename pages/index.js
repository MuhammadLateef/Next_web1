import styles from "../styles/Home.module.css";
// import HomePage from "./api/Home";
import ResponsiveAppBar from "../componants/ResponsiveAppBar";
import GridComponants from "../componants/Home2"

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
 return (
   <div className={styles.container}>
     <ResponsiveAppBar />
     {/* <HomePage /> */}
     <GridComponants />
   </div>
 );
}