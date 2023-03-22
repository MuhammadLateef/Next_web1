import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";import createEmotionCache from "../utils/createEmotionCache";
import { theme } from "../utils/theme";
const clientSideEmotionCache = createEmotionCache();
export default function MyApp({ Component, emotionCache = clientSideEmotionCache,pageProps }) {
 return (
  <CacheProvider value={emotionCache}>
   <ThemeProvider theme={theme}>
     <Component {...pageProps} />
   </ThemeProvider>
   </CacheProvider>
 );
}
