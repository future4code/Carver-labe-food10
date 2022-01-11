import React from "react";
 import logo from '../../assets/logo.png'
import { ScreenContainer,Logo, ButtonVoltar,ImgVoltar } from "./styled";
import SignUpForm from "./SignUpForm";
import { goToLogin} from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import back from "../../assets/back.png"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const SignUpPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useHistory();
 
  return (
    <ScreenContainer>
     < ButtonVoltar onClick={()=>goToLogin(history)}><ImgVoltar src={back}/></ ButtonVoltar>
      <Logo src={logo}/>
      <br/>
     <h3> <b>Cadastrar</b></h3>
      <SignUpForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  );
};

export default SignUpPage;
