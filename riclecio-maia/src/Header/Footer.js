import { StyledToolbar } from "./styled";
import { Button } from "./styled";
import { Button2 } from "./styled";

import { useHistory } from "react-router-dom";
import  avatar from "../assets/avatar.png";
import  homepage from "../assets/homepage.png";
import { HomeImage } from "./styled";

import { goToHomeList, goToLogin } from "../routes/coordinator";

const Footer = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <div>
      <Button onClick={() => goToHomeList(history)}>
       <img src={homepage} alt="home"/>
        
      </Button>
      <Button2 onClick={rightButtonAction}><img src={avatar}alt="login"/></Button2>
    </div>
  );
};

export default Footer;
