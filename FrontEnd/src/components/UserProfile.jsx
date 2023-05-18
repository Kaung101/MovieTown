import React, { useState } from 'react';
import { Grid, Box, TextField,Button, Typography, Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { theme } from '../Styles/theme/theme';
import '../Styles/css/Login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import Nav from './Nav';
import Footer from './footer';
function UserProfile() {
  const [username, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  //handleSubmit
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username == "" || pwd == "" ){
      setOpenDialog(true);
    }else{
    const info = {username, pwd};
    history.push('/');
    //check with db
    }
  }
  
  const closeDialog = () => {
    setOpenDialog(false);
  }
  const dialogBtn = {
    backgroundColor:'#4BB543',
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
      <Box>
        <Nav></Nav>
        <Grid  
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh'}}

        > 
          <Grid item xs={10} sm={5} md={3} >
            <Grid item mb={1}>
              <AccountCircleIcon style={{fontSize:'300%'}}/>
            </Grid>
            <Grid item mb={2}>
              <Typography variant="h5" component="label" fontFamily="'Reem Kufi', sans-serif">Personal Information</Typography>
            </Grid>
            
            <form style={parentBox} onSubmit={handleSubmit}>
              <Grid container spacing={3} alignItems="center" p={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="label" htmlFor="username"  sx={labelStyle}>
                    Username
                  </Typography>
                  <TextField value={username} onChange={(e) => {setName(e.target.value)}} required fullWidth id="username" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="label" htmlFor="phNumber" sx={labelStyle}>
                    Phone Number
                  </Typography>
                  <TextField value={pwd} onChange={(e) => {setPwd(e.target.value)}} required fullWidth type="text" id="password" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="label" htmlFor="email" sx={labelStyle}>
                    Email
                  </Typography>
                  <TextField value={pwd} onChange={(e) => {setPwd(e.target.value)}} required fullWidth type="email" id="password" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="label" htmlFor="password" sx={labelStyle}>
                    Password
                  </Typography>
                  <TextField value={pwd} onChange={(e) => {setPwd(e.target.value)}} required fullWidth type="password" id="password" variant="outlined" />
                </Grid>
                <Grid item xs={6} md={6}>
                </Grid>
                <Grid item xs={6} md={6} >
                    <Button onClick={handleSubmit} size="small" variant="contained" style={{float:'right', backgroundColor:'#BE1D1B', color:'#fff'}}>
                    <Typography className='btn' variant="body2" component="label" fontFamily="'Reem Kufi', sans-serif">
                      Update
                    </Typography>
                    </Button>
                </Grid>
              </Grid>
            </form>
        </Grid>
        {/* Dialog Box */}
        {/* Dialog Box */}
      <Dialog open={openDialog} onClose={closeDialog} maxWidth='md'>
        <DialogTitle ><MarkChatReadIcon style={{color:'#4BB543'}}/> Success </DialogTitle>
        <DialogContent>
          <DialogContentText fontFamily="'Reem Kufi', sans-seri">
          Your Information is successfully updated!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button fontFamily="'Reem Kufi', sans-seri" sx={dialogBtn} className='successbtnDialog' onClick={closeDialog}>OK</Button>
        </DialogActions>
      </Dialog>
      </Grid>
        <Footer></Footer>
      </Box>
    );
}

export default UserProfile