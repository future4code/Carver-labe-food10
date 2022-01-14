import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../global/GlobalStateContext';
import LogoFood104 from '../../img/LogoFood104.png';
import senha24 from '../../img/senha24.png';
// import senha2x from '../../img/senha2x.png';
// import senha3x from '../../img/senha3x.png';
import { TextField } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './StyledLogin.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    buttonLogin: {
        backgroundColor: '##e86e5a',
        background: '#e86e5a',

    }

}));

export const LoginPage = () => {


    const { email, setEmail, password, setPassword, PostOnSubmitLogin, onChangeEmail, onChangePassword, goToRestaurants,handleClickShowPassword, handleMouseDownPassword } = useContext(GlobalContext);

    PostOnSubmitLogin({ email: "julia.teste@gmail.com", password: "12345" })

    const classes = useStyles();


    return (
        <div class="Login" >
            <Container maxWidth="sm">
                <header id="container-header">
                    <div class="Logo-Food-Login">
                        <img src={LogoFood104} />
                    </div>

                    <div class="Title">
                        <div class="Text">
                            Entrar
                        </div>
                    </div>
                    <div className={classes.root}>
                        <grid container spacing={3}>
                            <form onSubmit={PostOnSubmitLogin}>
                                <div>
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

                                </div>
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
                                <Grid item xs={12}>
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={password?.showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={onChangePassword('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {password.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                    <Button variant="contained" fullWidth className={classes.buttonLogin} onClick={goToRestaurants}>Entrar</Button>
                                    {/* <div class="">
                                    <Button class="button-login" onClick={goToRestaurants}>Entrar</Button>
                                </div> */}
                                </Grid>
                                {/* <Button variant="contained" color="dark-peach" onClick={goToRestaurants}>Entrar</Button> */}
                            </form>
                        </grid>
                    </div>



                </header>
            </Container>
        </div>
    )
}

export default LoginPage; 