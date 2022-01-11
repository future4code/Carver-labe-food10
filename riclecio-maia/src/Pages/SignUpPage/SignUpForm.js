import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, SignUpFormContainer } from "./styled";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import CircularProgress from "@material-ui/core/CircularProgress";

const SignUpForm = ({ setRightButtonText }) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history, setRightButtonText, setIsLoading);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={"name"}
            onChange={onChange}
            label={"Nome"}
            margin={"normal"}
            fullWidth
            required
            autoFocus
          />
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            margin={"normal"}
            name={"email"}
            value={form.email}
            onChange={onChange}
          />
          <TextField
            fullWidth
            required
            label="CPF"
            type="number"
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            margin={"normal"}
          />
          <TextField
            value={form.password}
            name={"password"}
            onChange={onChange}
            label={"Senha"}
            type={"password"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Fazer Cadastro</>
          )}
        </Button>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
