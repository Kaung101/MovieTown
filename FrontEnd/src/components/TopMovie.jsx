import { Box, Card, CardContent, CardMedia, Grid, IconButton, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Footer from './footer'
import Axios from '../utils/Axios';
import { Visibility as VisibilityIcon } from '@mui/icons-material';
function NewRelease() {
  const [data, setData] = useState([]);
  //search in db and show the result in other page
    useEffect(() => {
      const fetchData = async () => {
        try {
          // API call using axios
          const response = await Axios.get(`/topMovie`);
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
        {/* Nav */}
        <Nav></Nav>
        {/* movie list */}
        <Typography variant='h5'my={2}>Top Movies</Typography>
        <Box className="new-releases" sx={{m:{md:5, xs:3}}}>
          {/* card start */}
          {/*parent of the card*/}
          <Grid container spacing={3}>
            {/* map the array */}
            {data.map((item) => (
              //set movie id
              <Grid item xs={6} md={3} key={item.movie_id}>
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
      
        {/* footer */}
        <Box mt={25} mb={0}>
        <Footer></Footer>
        </Box>
    </Box>
    </Box>
  )
}

export default NewRelease