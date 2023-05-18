import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Rating, TextField, Typography } from '@mui/material'
import React from 'react'
import Nav from './Nav'
import Footer from './footer'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
function MovieDetail() {
  const [openDialog, setOpenDialog] = useState(false);
  const handleDialog = () =>{
    setOpenDialog(true);
  }
  const closeDialog = () =>{
    setOpenDialog(false);
  }
  const dialogBtn = {
    backgroundColor: "#4BB543",
  }
  return (
    <Box className="movie-detail">
        <Nav></Nav>
        <Grid container spacing={2} mt={5}>
            <Grid item xs={7}>
              <img src='assests/mulan.png' alt='title' style={{ width:{xs:'28', md:"25"}}} />
            </Grid>
            <Grid item xs={5} style={{textAlign:'left'}}>
              <Typography variant="h5" gutterBottom>
                {/* {title} */}
                Title
              </Typography>
              <Typography variant="h5" gutterBottom>
                <Rating></Rating>
              </Typography>
              <Typography variant="body2" maxWidth={300}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptatibus, voluptatum eligendi quaerat iure ipsum.</Typography>
            </Grid>
        </Grid>
        {/* review part form part*/}
        <Grid container mt={5} ml={{xs:0, md:35}}  px={2} maxWidth={{md:'60%'}} justifyContent={'center'}>
            <Grid item xs={12} style={{textAlign:'left'}}>
                <Typography variant='h6'>Rate and Review</Typography>
            </Grid>
            <Grid item xs={12} md={6}  style={{textAlign:'left'}} py={1}>
                <Typography variant='p' variant='body2' pb={1}>Please give rating to this movie.</Typography>
            </Grid>
            <Grid item xs={12} md={6}  style={{textAlign:'right'}} py={1}>
                <Rating></Rating>
            </Grid>
            <Grid item xs={12} style={{textAlign:'left'}}>
                <TextField fullWidth id="outlined-basic" label="How do you think?" variant="outlined"multiline />
            </Grid>
            <Grid item xs={12} my={1}>
                <Button size='small' style={{background:'#BE1D1B', float:'right'}} onClick={handleDialog}>Send</Button>
            </Grid>
        </Grid>

        {/* review  */}
        <Grid container mt={3} ml={{xs:0, md:35}}  px={2} maxWidth={{md:'60%'}} spacing={0}>
            <Grid item xs={1} style={{textAlign:'center', fontSize:'32px'}}>
                <AccountCircleIcon style={{fontSize:'100%'}}/>
            </Grid>
            <Grid item xs={8} ml={{xs:2, md:0}} style={{textAlign:'left'}}>
                <Typography variant='h6'>Moana</Typography>
                <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis assumenda iste laborum.</Typography>
            </Grid>
        </Grid>
        <Footer></Footer>

        {/* Dialog Box */}
      <Dialog open={openDialog} onClose={closeDialog} maxWidth='md'>
        <DialogTitle ><MarkChatReadIcon style={{color:'#4BB543'}}/> Success </DialogTitle>
        <DialogContent>
          <DialogContentText fontFamily="'Reem Kufi', sans-seri">
          Your review is successfully sent!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button fontFamily="'Reem Kufi', sans-seri" sx={dialogBtn} className='successbtnDialog' onClick={closeDialog}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default MovieDetail