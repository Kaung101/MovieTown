import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Rating, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './footer'
import Axios from '../utils/Axios';
import { useCookies } from 'react-cookie';
import { useMutation } from 'react-query';
import { Visibility as VisibilityIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
function MovieDetail() {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [movieCover, setMovieCover] = useState('');
  const [view, setView] = useState('');
  const [review, setReview] = useState('');
  const [cookies, setCookies] = useCookies(['userType'] );
  const [userID, setUserID] = useState(''); 
  const [reviewData, setReviewData] = useState([]);
  //get username from the cookies
  const username = cookies.userType;
  console.log(username);
  //get the movie id from the url
  const {movieId} = useParams();
  console.log("hello"+movieId);
  // Fetching new releases
  useEffect(() => {
    // Simulating data fetching from an API
    const fetchData = async () => {
      try {
        // API call using axios
        const response = await Axios.get(`/detail/${movieId}`)
        //get the array
        const data = response.data.message;
        console.log(data.view+"viee");
      
        //want to display the data and want to change the data
        setTitle(data.title);
        setDescription(data.description);
        setMovieCover(data.movie_cover);
        setView(data.view);
        
        const res = await Axios.get(`/userID/${username}`);
        const newData = res.data.message;
        console.log(newData);
        setUserID(newData.user_id);
        console.log(userID);
        //count
        // Increase the count by 1
          setCount(prevCount => prevCount + 1);

          // Make API call to update count in Movie table
          Axios.patch(`/countUpdate/${movieId}/${count}`)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          
          console.log("count"+ count);

        //get review
        const reviewRes = await Axios.get(`/showReview/${movieId}`);
        const reviewData = reviewRes.data.message;
        setReviewData(reviewData);
        console.log(reviewData + "review");
        reviewData.map((item) => {
          console.log(item.review_info);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [review]);
  //review
  reviewData.map((item) => {
    console.log(item.review_info);
  });
  const {data, error, mutate} = useMutation(() => Axios.post(`/review/${movieId}`, {
    review,
    movieId,
    userID,
    }));

  const [openDialog, setOpenDialog] = useState(false);
  const handleDialog = () =>{
    if(review === ''){
      alert("Please write review");
      return;
    }
    else{
      mutate();
      setReview('');
      setOpenDialog(true);
    }
    
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
              <img src={movieCover} alt='title' style={{ width: '80%', maxWidth: '200px' }}  />
            </Grid>
            <Grid item xs={5} style={{textAlign:'left'}}>
              <Typography variant="h4" gutterBottom>
                {/* {title} */}
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton disabled style={{ fontSize: '0.8rem', marginRight: '0.5rem', marginLeft: '-0.6rem', color:'#BE1D1B' }}>
                  <VisibilityIcon />
                </IconButton>
                <span style={{ fontSize: '1rem', color:'#BE1D1B' }}>{view}</span>
              </Typography>
              <Typography variant="body2" maxWidth={300}>{description}</Typography>
            </Grid>
        </Grid>
        {/* review part form part*/}
        <Grid container mt={5} ml={{xs:0, md:35}}  px={2} maxWidth={{md:'60%'}} justifyContent={'center'}>
            <Grid item xs={12} style={{textAlign:'left'}}>
                <Typography variant='h6'>Review</Typography>
            </Grid>
            <Grid item xs={12}  style={{textAlign:'left'}} py={1}>
                <Typography variant='p' pb={1}>Please write review to this movie.</Typography>
            </Grid>
            <Grid item xs={12} style={{textAlign:'left'}}>
                <TextField fullWidth id="outlined-basic" label="How do you think?" value={review} onChange={(e) => {setReview(e.target.value)}} variant="outlined" multiline />
            </Grid>
            <Grid item xs={12} my={1}>
                <Button size='small' style={{background:'#BE1D1B', float:'right'}} onClick={handleDialog}>Send</Button>
            </Grid>
        </Grid>

        {/* review  */}
        <Box>
          {reviewData.map((review) => (
            <Grid container mt={3} ml={{xs:0, md:35}}  px={2} maxWidth={{md:'60%'}} spacing={0}>
            <Grid item xs={1} style={{textAlign:'center', fontSize:'32px'}}>
                <AccountCircleIcon style={{fontSize:'100%'}}/>
            </Grid>
            <Grid item xs={8} ml={{xs:2, md:0}} style={{textAlign:'left'}}>
                <Typography variant='h6'>{review.user_name}</Typography>
                <Typography variant='body2'>{review.review_info}</Typography>
            </Grid>
        </Grid>
          ))}
        </Box>
        
        
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