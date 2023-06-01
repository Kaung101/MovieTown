import React, { useEffect, useState } from 'react'
import { Box, Grid,TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import AdminNav from './AdminNav'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useMutation } from 'react-query';
import Axios from '../utils/Axios';
function AdminAdd() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [movieCover, setMovieCover] = useState(''); 
    const [openDialog, setOpenDialog] = useState(false);

    //integration
    const {data, error, mutate} = useMutation(() => Axios.post('/adminAdd', {
        title,
        description,
        movieCover,
        }));
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title == "" || description == "" || movieCover == ""){
            console.log('error');
        }else{
            mutate();
            setOpenDialog(true);

        }
    }
    //handleCancel
    const handleCancel = () => {
        history.push("/adminhome");
    };
    //closeDialog
    const closeDialog = () => {
        setOpenDialog(false);
        history.push('/adminhome');
    }
    
    useEffect(() => {
        if (openDialog) {
          const timeout = setTimeout(() => {
            setOpenDialog(false);
            history.push('/adminhome');
          }, 2000);
    
          return () => clearTimeout(timeout);
        }
      }, [openDialog, history]);

    const labelStyle = {
        float: 'left',
        fontFamily:'Reem kufi, sans-serif'
      }
    const buttonRegisterStyle = {
      backgroundColor: '#BE1D1B',
      color:'white',
      float:'left'
    }
    const parentBox = {
        border:'1px solid black',
        borderRadius:'5px',
        backgroundColor:"#D9D9D9"
      }
    const buttonCancelStyle = {
        backgroundColor: '#BE1D1B',
        color:'white',
        float:'right'
      }
  return (
    <Box>
        <Box>
            <AdminNav></AdminNav>
        </Box>
            <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '70vh'}}>
                <Grid xs={12} py={3} sx={{float:'left'}} item>Adding New Movie</Grid>
                <Grid item maxWidth={400}>
                <form style={parentBox}>
                <Grid xs={12} container spacing={3}  p={2} pl={4}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='title' sx={labelStyle}>
                            Title
                        </Typography>
                        <TextField value={title} onChange={(e) => {setTitle(e.target.value)}} required fullWidth id="title" variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='description' sx={labelStyle}>
                            Description
                        </Typography>
                        <TextField value={description} onChange={(e) => {setDescription(e.target.value)}} required type="text" fullWidth id="description" variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='movie_cover' sx={labelStyle}>
                            Movie Cover URL
                        </Typography>
                        <TextField value={movieCover} onChange={(e) => {setMovieCover(e.target.value)}} required type="text" fullWidth id="movie_cover" variant="outlined"></TextField>
                    </Grid>
                    {/* button */}
                    <Grid item xs={6} md={6}>
                        <Button onClick={handleSubmit} size="small" variant="contained" style={buttonRegisterStyle}  >
                            <Typography className='btn' variant="subtitle2" component="label" fontFamily="'Reem Kufi', sans-serif">
                                Add
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <Button onClick={handleCancel}  size="small" variant="contained" style={buttonCancelStyle}>
                            <Typography className='btn' variant="subtitle2" component="label"  fontFamily="'Reem Kufi', sans-serif">
                                Cancel
                            </Typography>                
                        </Button>
                    </Grid>
                </Grid>
                </form>
                </Grid>
            </Grid>

            {/* Success Box */}
      <Dialog open={openDialog} onClose={closeDialog} >
        <DialogTitle >Success</DialogTitle>
        <DialogContent>
          <DialogContentText fontFamily="'Reem Kufi', sans-seri">
            Successfully Added a New Movie.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  fontFamily="'Reem Kufi', sans-seri" sx={{color:'#000'}} className='btnDialog' onClick={closeDialog}>OK</Button>
        </DialogActions>
      </Dialog>


        </Box>
  )
}

export default AdminAdd