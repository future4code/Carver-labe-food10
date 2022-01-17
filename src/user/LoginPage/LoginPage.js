import React, { useContext, useState } from 'react';
import axios from 'axios';
import { goToRestaurants } from '../../routes/Coordination';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../global/GlobalStateContext';
import LogoFood104 from '../../img/LogoFood104.png';
import { TextField } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './StyledLogin.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    buttonLogin:{
        backgroundColor: '##e86e5a',
        background: '#e86e5a',

    }

  }));
  
export const LoginPage = () => {

    const navigate = useNavigate();

    const { email, setEmail, password, setPassword, onChangeEmail, onChangePassword, goToRestaurants,token, setToken} = useContext(GlobalContext);

    const PostOnSubmitLogin = (item) => {
        // event.preventDefault()
        console.log(item)

        const body = {
            email: item.email,
            password: item.password
        };

        const rappi4D = "rappi4D"

        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/${rappi4D}/login`, body)
        .then((response) => {
            console.log("essa porra ta rodando", response.data.token);
            localStorage.setItem("token", response.data.token)
            setToken(token)
           
            navigate('/Restaurant');
        })
        .catch((error) => {
            console.log("Não conseguimos:", error.response);
        });


    }

    const classes = useStyles();


    return (
        <div class="Login" >
            <Container maxWidth="sm">
                <header id="container-header">
                    <div className='Logo-Food-Login'>
                        <img src={LogoFood104} />
                    </div>

                    <div class="Title">
                        <div class="Text">
                            Entrar
                        </div>
                    </div>
                    <div className={classes.root}>
                    <form onSubmit={PostOnSubmitLogin}>
                    <Grid container spacing={1}>
                        
                        
                                <Grid item xs={12}>
                                    <TextField id="outlined-basic"
                                        label="Email"
                                        placeholder="email@email.com"
                                        variant="outlined"
                                        defaultValue={email}
                                        onChange={onChangeEmail}
                                        fullWidth
                                    />
                                </Grid>

                            
                            <br />
                            <Grid item xs={12}>
                                <div>
                                    <TextField id="outlined-basic"
                                        label="Password"
                                        placeholder="minimo 6 caracteres"
                                        variant="outlined"
                                        defaultValue={password}
                                        onChange={onChangePassword}
                                        fullWidth
                                    />
                                </div>
                            </Grid>
                                                      
                            <br />
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth className={classes.buttonLogin} onClick={() => PostOnSubmitLogin({ email: email, password: password})}>Entrar</Button>
                                {/* <div class="">
                                    <Button class="button-login" onClick={goToRestaurants}>Entrar</Button>
                                </div> */}
                            </Grid>
                            {/* <Button variant="contained" color="dark-peach" onClick={goToRestaurants}>Entrar</Button> */}
                    </Grid>
                    </form>

                    </div>
                    


                </header>
            </Container>
        </div>
    )
}

export default LoginPage; 