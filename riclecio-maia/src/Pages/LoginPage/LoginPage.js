import React from "react";
import { ScreenContainer,SignUpButtonContainer,Logo,  ButtonVoltar,ImgVoltar } from "./styled";
import logo from "../../assets/logo.png"
import Button from "@material-ui/core/Button";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { goToSignUpPage,goToHomeList } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import back from "../../assets/back.png"

const LoginPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useHistory();
 
  return (
    <ScreenContainer>
       < ButtonVoltar onClick={()=>goToHomeList(history)}><ImgVoltar src={back}/></ ButtonVoltar>
      <Logo src={logo} alt="logo" />
      <LoginForm setRightButtonText={setRightButtonText} />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUpPage(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
