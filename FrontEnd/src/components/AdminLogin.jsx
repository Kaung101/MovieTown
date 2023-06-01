import React, { useState } from 'react';
import { Grid, TextField,Button, Typography, Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { theme } from '../Styles/theme/theme';
import '../Styles/css/Login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Axios from '../utils/Axios';
import { useCookies } from 'react-cookie';
import { useMutation } from 'react-query';
const AdminLogin = () => {
  
  const [usernameLogin, setNameLogin] = useState('');
  const [pwdLogin, setPwdLogin] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  //handleSubmit
  const history = useHistory();
  //set user Type
  const [cookies, setCookies, removeCookie] = useCookies([''] ); 
  setCookies('userType', usernameLogin);
  //integration
  const {data, error, mutate} = useMutation(() => Axios.post('/adminLogin', {
    usernameLogin,
    pwdLogin,
  }));
console.log(usernameLogin, pwdLogin, "hello");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(usernameLogin == "" || pwdLogin == "" ){
      setOpenDialog(true);
    }else{
      mutate(); 
      if(error) console.log('error');
      else  history.push('/adminhome');
    //check with db
    }
  }
  
  const closeDialog = () => {
    setOpenDialog(false);
  }
  const dialogBtn = {
    backgroundColor: theme.palette.tertiary.main,
  }
  const handleCancel = () => {
    history.push("/");
  }
  const labelStyle = {
    float: 'left',
    fontFamily:'Reem kufi, sans-serif'
  }
  const buttonLoginStyle = {
    backgroundColor: theme.palette.tertiary.main,
    color:'white',
    float:'left'
  }
  const buttonCancelStyle = {
    backgroundColor: theme.palette.tertiary.main,
    color:'white',
    float:'right'
  }
  const parentBox = {
    border:'1px solid black',
    borderRadius:'5px',
    backgroundColor:theme.palette.primary.main
  }
  const imgStyle = {
    width:'100px',
    height:'100px',
    border: '1px solid #BE1D1B',
    borderRadius: '50%',
    margin: '0 auto',
  }
  return (
    // outermost
    <Grid  
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh'}}
      
    > 
      <Grid item xs={10} sm={5} md={3} >
        <Grid item mb={1}>
          <Avatar
            alt="logo"
            src="assests/logo.png"
            sx={imgStyle}
          />
        </Grid>
        <Grid item mb={2}>
          <Typography variant="h5" component="label" fontFamily="'Reem Kufi', sans-serif">Log in To Admin</Typography>
        </Grid>

        <form style={parentBox} onSubmit={handleSubmit}>
          <Grid container spacing={3} alignItems="center" p={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" component="label" htmlFor="username"  sx={labelStyle}>
                Username
              </Typography>
              <TextField value={usernameLogin} onChange={(e) => {setNameLogin(e.target.value)}} required fullWidth id="username" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" component="label" htmlFor="password" sx={labelStyle}>
                Password
              </Typography>
              <TextField value={pwdLogin} onChange={(e) => {setPwdLogin(e.target.value)}} required fullWidth type="password" id="password" variant="outlined" />
            </Grid>
            <Grid item xs={6} md={6}>
              <Button onClick={handleSubmit} size="small" variant="contained" style={buttonLoginStyle}  >
              <Typography className='btn' variant="subtitle2" component="label" fontFamily="'Reem Kufi', sans-serif">
                Login
              </Typography>
              </Button>
            </Grid>
            <Grid item xs={6} md={6} >
                <Button onClick={handleCancel} size="small" variant="contained" style={buttonCancelStyle}>
                  <Typography className='btn' variant="subtitle2" component="label"  fontFamily="'Reem Kufi', sans-serif">
                  Cancel
                  </Typography>                
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid item xs={12} md={6} style={{float:'left'}} mt={2}>
           <a href="/register" style={{color:'black'}}>Create a New Account</a>
        </Grid>
      </Grid>
      {/* Dialog Box */}
      <Dialog open={openDialog} onClose={closeDialog} >
        <DialogTitle >Login Error</DialogTitle>
        <DialogContent>
          <DialogContentText fontFamily="'Reem Kufi', sans-seri">
            Please enter both username and password.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button fontFamily="'Reem Kufi', sans-seri" sx={dialogBtn} className='btnDialog' onClick={closeDialog}>OK</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default AdminLogin;
