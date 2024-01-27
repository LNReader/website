import { Route, Routes } from "react-router-dom";
import Homepage from "./views/homepage";
import Docs from "./views/docs";
import TermsOfService from "./views/tos";
import PrivacyPolicy from "./views/policy";
import Layout from "./layout";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="docs" element={<Docs/>}/>
                    <Route path="tos" element={<TermsOfService/>}/>
                    <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                </Routes>
            </Layout>
        </ThemeProvider>
    )
}
