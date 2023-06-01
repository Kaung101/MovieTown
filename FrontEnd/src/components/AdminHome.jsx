import React, { useEffect } from 'react'
import { Box, Grid, Button, Typography, Card, CardContent, CardMedia, Rating, useMediaQuery, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';
import AdminNav from './AdminNav';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Axios from '../utils/Axios';
import { useCookies } from 'react-cookie';
function AdminHome() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [data, setData] = React.useState([]);
  const history = useHistory();
  const [movieId, setMovieId] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);
  const [cookies, setCookies] = React.useState('');
  //update handle button
  const handleUpdate = (movieId) => {
    history.push(`/adminUpdate/${movieId}`);
  }
  //update handle button
  const handleDelete = (movieId) => {
    setOpenDialog(true);
    //set movie id to keep track of which movie is being deleted
    setMovieId(movieId);
    console.log(movieId);
  }
  
  const realDelete = () => {
    setOpenDialog(false);
    console.log(movieId+"f");
    Axios.delete(`/adminhome/${movieId}`)
      .then((response) => {
        console.log(response + ' deleted');
        // Remove the deleted movie from the data array
        setData((prevData) => prevData.filter((item) => item.movie_id !== movieId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //closeDialog
  const closeDialog = () => {
    setOpenDialog(false);
  }
  //handleCancel
  const deleteClose = () => {
    history.push("/adminhome");
    setOpenDialog(false);
  };

  //add handle button
  const handleClick = ()=>{
    history.push("/adminAdd");
  }
  //as soon as page is load , move list will display
  useEffect(() => {
    // Simulating data fetching from an API
    const fetchData = async () => {
      try {
        // API call using axios
        const response = await Axios.get('/adminhome');
        //get the array
        const data = response.data.message;
        setData(data);
        console.log(data);
        //loop data
         data.map((item) => {
           console.log(item.title);
         });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
            <AdminNav/>
        </Grid>
        <Grid xs={6} md={2} style={{float:'left',backgroundColor:'#BE1D1B', color:'#fff'}} m={3}>
          <Button size="small" onClick={handleClick}>Add a new Movie</Button>
        </Grid>
        <Grid item xs={12} style={{float:'left'}} m={3}>
          <Typography mb={3} variant='h5'>Movie List</Typography>
          {/* parent box of card */}
          <Grid container spacing={3}>
            {/* map the array */}
            {data.map((item) => ( 
              //set movie id
              <Grid item xs={6} md={3} key={item.movie_id}>
              {/*test card */}
              <Card>
      <CardContent>
        <Grid container spacing={2}>
          {!isSmallScreen && (
            <Grid item xs={12} sm={4}>
              {/* Image */}
              <CardMedia
                component="img"
                height="140"
                image={item.movie_cover}
                alt="Card Image"
              />
            </Grid>
          )}
          <Grid item xs={12} sm={!isSmallScreen ? 8 : 12}>
            {/* Title */}
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            {/* Description */}
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            {/* Update and Delete Buttons */}
            <Grid container justifyContent="flex-end" marginTop={2}>
              <Grid item>
                <Button onClick={() => handleUpdate(item.movie_id)} size='small' variant="contained" sx={{backgroundColor:'#BE1D1B', color:'#fff'}}>
                  Update
                </Button>
              </Grid>
              <Grid item ml={1} >
                <Button onClick={() => handleDelete(item.movie_id)} size='small' variant="contained" color="secondary" sx={{backgroundColor:'#BE1D1B', color:'#fff'}}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
              {/*test card end */}
            </Grid>

            ))}
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={closeDialog}>
  <DialogTitle>Delete?</DialogTitle>
  <DialogContent>
    <DialogContentText fontFamily="'Reem Kufi', sans-seri">
      Are you sure you want to delete this movie?
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button
      fontFamily="'Reem Kufi', sans-seri"
      sx={{ color: '#000' }}
      className='btnDialog'
      onClick={deleteClose}
    >
      Cancel
    </Button>
    <Button
      fontFamily="'Reem Kufi', sans-seri"
      sx={{ color: '#000' }}
      className='btnDialog'
      onClick={realDelete}
    >
      OK
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  )
}

export default AdminHome