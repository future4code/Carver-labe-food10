import { ThemeProvider } from "@material-ui/core/styles";
import react, { useState } from "react";
import theme from "./constants/theme";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";


import Footer from "../src/Header/Footer";

const App = () => {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        
        <Router setRightButtonText={setRightButtonText} />
        {/* <Footer
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

