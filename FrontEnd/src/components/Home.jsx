import React, { useEffect } from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Footer from './footer'
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Paper, Rating, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import '../Styles/css/Nav.css';
import Axios from '../utils/Axios';
import { Visibility as VisibilityIcon } from '@mui/icons-material';
function Home() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [newReleases, setNewReleases] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching new releases
        const newReleaseResponse = await Axios.get('/newRelease');
        const newReleaseData = newReleaseResponse.data.message.slice(0, 4);

        // Fetching top movies
        const topMoviesResponse = await Axios.get('/top4');
        const topMoviesData = topMoviesResponse.data.message.slice(0, 4);

        // Fetching all movies
        const allMoviesResponse = await Axios.get('/all4');
        const allMoviesData = allMoviesResponse.data.message.slice(0, 4);

        // Storing data to the state
        setNewReleases(newReleaseData);
        setTopMovies(topMoviesData);
        setAllMovies(allMoviesData);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch data
    fetchData();
  }, []);

  const handleOpenDetail = (movieId) => {
    console.log(movieId);
  
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
    history.push(`/detail/${movieId}`);
  };
  

  const handleMore = () => {
    console.log("more");
    history.push("/newRelease");
  };

  const handleMoreTop = () => {
    console.log("more");
    history.push("/top");
  };

  const handleAll = () => {
    console.log("all");
    history.push("/all");
  };
  return (
    <Box> 
      <Nav></Nav>
      <Banner></Banner>
      {/* new releases */}
      <Box className="new-releases" sx={{m:{md:5, xs:3}}}>
        <Typography variant='h5'mb={2} style={{textAlign:'left'}}>New Releases</Typography>
        {/* card start */}
          {/*parent of the card*/}
          <Grid container spacing={3}>
            {/* map the array */}
            {newReleases.map((item) => (
              //set movie id
              <Grid item xs={6} md={3} key={item.movie_id}  onClick={() => handleOpenDetail(item.movie_id)}>
                {/*test card */}
                <Card className='card' sx={{ maxWidth:{xs:170, md:200}, paddingTop:'2%'}} style={{ background:'#BB5AD', border:'0.1px solid rgba(0,0,0,0.3)'}} >
                  <CardMedia
                    sx={{ height: 130}}
                    image={item.movie_cover}
                    title="movieImage"
                  />
                  <CardContent style={{textAlign:'left', fontSize:'1rem', fontWeight:'10'}}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton disabled style={{ fontSize: '0.8rem', marginRight: '0.5rem', marginLeft: '-0.6rem', color:'#BE1D1B' }}>
                      <VisibilityIcon />
                    </IconButton>
                    <span style={{ fontSize: '1rem', color:'#BE1D1B' }}>{item.view}</span>
                  </Typography>
                  </CardContent>
                </Card>  
              </Grid>
          ))}
          </Grid>
        <Button onClick={handleMore} size='small'  style={{background:'#BE1D1B', float:'right', marginTop:'1rem'}}>More</Button>
      </Box>

      {/* Top Movie */}
      <Box className="new-releases" sx={{m:{md:5, xs:3}}}>
        <Typography variant='h5'mb={2} style={{textAlign:'left', marginTop:'2rem'}}>Top Movie</Typography>
        {/*parent of the card*/}
        <Grid container spacing={3}>
            {/* map the array */}
            {topMovies.map((item) => (
              //set movie id
              <Grid item xs={6} md={3} key={item.movie_id}  onClick={() => handleOpenDetail(item.movie_id)}>
                {/*test card */}
                <Card className='card' sx={{ maxWidth:{xs:170, md:200}, paddingTop:'2%'}} style={{ background:'#BB5AD', border:'0.1px solid rgba(0,0,0,0.3)'}} >
                  <CardMedia
                    sx={{ height: 130}}
                    image={item.movie_cover}
                    title="movieImage"
                  />
                  <CardContent style={{textAlign:'left', fontSize:'1rem', fontWeight:'10'}}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton disabled style={{ fontSize: '0.8rem', marginRight: '0.5rem', marginLeft: '-0.6rem', color:'#BE1D1B' }}>
                      <VisibilityIcon />
                    </IconButton>
                    <span style={{ fontSize: '1rem', color:'#BE1D1B' }}>{item.view}</span>
                  </Typography>
                  </CardContent>
                </Card>  
              </Grid>
          ))}
          </Grid>
        <Button onClick={handleMoreTop} size='small' style={{background:'#BE1D1B', float:'right'}}>More</Button>
      </Box>

      {/* movie list */}
      <Box className="new-releases" sx={{m:{md:5, xs:3}}}>
        <Typography variant='h5'mb={2} style={{textAlign:'left' , marginTop:'2rem'}}>Movie List</Typography>
        {/*parent of the card*/}
        <Grid container spacing={3}>
            {/* map the array */}
            {allMovies.map((item) => (
              //set movie id
              <Grid item xs={6} md={3} key={item.movie_id}  onClick={() => handleOpenDetail(item.movie_id)}>
                {/*test card */}
                <Card className='card' sx={{ maxWidth:{xs:170, md:200}, paddingTop:'2%'}} style={{ background:'#BB5AD', border:'0.1px solid rgba(0,0,0,0.3)'}} >
                  <CardMedia
                    sx={{ height: 130}}
                    image={item.movie_cover}
                    title="movieImage"
                  />
                  <CardContent style={{textAlign:'left', fontSize:'1rem', fontWeight:'10'}}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton disabled style={{ fontSize: '0.8rem', marginRight: '0.5rem', marginLeft: '-0.6rem', color:'#BE1D1B' }}>
                      <VisibilityIcon />
                    </IconButton>
                    <span style={{ fontSize: '1rem', color:'#BE1D1B' }}>{item.view}</span>
                  </Typography>
                  </CardContent>
                </Card>  
              </Grid>
          ))}
          </Grid>
        <Button onClick={handleAll} size='small' style={{background:'#BE1D1B', float:'right'}}>More</Button>
      </Box>
      {/* Start of footer */}
      <Footer></Footer>
    </Box>
    )
}

export default Home