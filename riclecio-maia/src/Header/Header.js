import React from "react";
import { StyledToolbar,Input,ImgBusca } from "./styled";

import AppBar from "@material-ui/core/AppBar";
import { useHistory } from "react-router-dom";
// import Input from "@material-ui/core/Input";
import { goToHomeList, goToLogin } from "../routes/coordinator";
import  search from "../assets/search.png";


const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
  <ImgBusca src={search}alt="buscar"/>
  <Input   placeholder={"Buscar"}/>
     
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
