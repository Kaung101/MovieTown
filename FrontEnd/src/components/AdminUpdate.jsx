import React, { useEffect, useState } from 'react'
import { Box, Grid,TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import AdminNav from './AdminNav'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';
import Axios from '../utils/Axios';
import { useQuery } from 'react-query';
function AdminUpdate() {
    //to update the movie
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [movieCover, setMovieCover] = useState(''); 
    const [openDialog, setOpenDialog] = useState(false);
    const history = useHistory();
    //handle cancel
    const handleCancel = ()=>{
        history.push("/AdminHome");
    }
    const closeDialog = () => {
        setOpenDialog(false);
        history.push('/Adminhome');
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
      //get the id from the params
        const {movieId} = useParams();
        console.log(movieId);
        const [data, setData] = useState('');

        //as soon as page is load , move list will display
        useEffect(() => {
          // Simulating data fetching from an API
          const fetchData = async () => {
            try {
              // API call using axios
              const response = await Axios.get(`/adminUpdate/${movieId}`)
              //get the array
              const data = response.data.message;
            //   const check = response.data.success;
            //   console.log(check);
            
              //want to display the data and want to change the data
              setTitle(data.title);
              setDescription(data.description);
              setMovieCover(data.movie_cover);
              
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
        }, []);


        //movie update
        const movieUpdate = async () => {
            const data = {
                title,
                description,
                movieCover,
            };
            try {
                // API call using axios
                const response = await Axios.patch(`/adminUpdate/${movieId}`, {
                    title,
                    description,
                    movieCover,
                });
                //get the array
                const data = response.data.message;
                const check = response.data.success;
                console.log(check);
                setData(data);
                console.log(data);
                if (check) {
                    setOpenDialog(true);
                }
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
  return (
    <Box>
        <Box>
            <AdminNav></AdminNav>
        </Box>
            <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '70vh'}}>
                <Grid xs={12} py={3} sx={{float:'left'}} item>Updating New Movie</Grid>
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
                        <Typography variant='subtitle1' component='label' htmlFor='image' sx={labelStyle}>
                            Image Path
                        </Typography>
                        <TextField value={movieCover} onChange={(e) => {setMovieCover(e.target.value)}} required fullWidth id="image" variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='description' sx={labelStyle}>
                            Description
                        </Typography>
                        <TextField value={description} onChange={(e) => {setDescription(e.target.value)}} required type="text" fullWidth id="description" variant="outlined"></TextField>
                    </Grid>
                    {/* button */}
                    <Grid item xs={6} md={6}>
                        <Button onClick={movieUpdate}  size="small" variant="contained" style={buttonRegisterStyle}  >
                            <Typography className='btn' variant="subtitle2" component="label" fontFamily="'Reem Kufi', sans-serif">
                                Update
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{float:'right'}}>
                        <Button  size="small" variant="contained" style={buttonCancelStyle}  onClick={handleCancel}>
                            <Typography className='btn' variant="subtitle2" component="label" fontFamily="'Reem Kufi', sans-serif">
                                Cancel
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                </form>
                </Grid>
            </Grid>

    {/* Dialog Box */}
      <Dialog open={openDialog} onClose={closeDialog} >
        <DialogTitle >Updated</DialogTitle>
        <DialogContent>
          <DialogContentText fontFamily="'Reem Kufi', sans-seri">
                Successfully Updated.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button fontFamily="'Reem Kufi', sans-seri" sx={{color:'#000'}} className='btnDialog' onClick={closeDialog}>OK</Button>
        </DialogActions>
      </Dialog>
        </Box>
  )
}

export default AdminUpdate