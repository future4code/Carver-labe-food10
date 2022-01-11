import react from "react";
import Header from "../../Header/Header";
import Footer from "../../Header/Footer";
import  { useState } from "react";

export const Home = () => {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );
  return (
    <div>
      <Header />
      <br />
      <Footer
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
    </div>
  );
};
export default Home;
