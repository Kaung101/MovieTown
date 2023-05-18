import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Footer from './footer'
import { Box, Button, Card, CardContent, CardMedia, Paper, Rating, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import '../Styles/css/Nav.css';
function Home() {
  const history = useHistory();
  const [value, setValue] = useState(0);
  const handleOpenDetail = () =>{
    history.push('/detail');
  }
  return (
    <Box> 
      <Nav></Nav>
      <Banner></Banner>
      {/* new releases */}
      <Box className="new-releases" sx={{m:{md:5, xs:3}}}>
        <Typography variant='h5'mb={2} style={{textAlign:'left'}}>New Releases</Typography>
        {/* card start */}
        <Card className='card'onClick={handleOpenDetail} sx={{ maxWidth:{xs:170, md:200}, paddingTop:'2%'}} style={{ background:'#BB5AD', border:'0.1px solid rgba(0,0,0,0.3)'}}>
          <CardMedia
            sx={{ height: 130}}
            image="assests/mulan.png"
            title="movieImage"
          />
          <CardContent style={{textAlign:'left', fontSize:'1rem', fontWeight:'10'}}>
            <Typography gutterBottom variant="h6" component="div">
              Movie Title
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontSize:'0.5em'}}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
            />
            </Typography>
          </CardContent>
        </Card>
        <Button size='small' style={{background:'#BE1D1B', float:'right'}}>More</Button>
      </Box>
      {/* Top Movie */}
      <Box className="new-releases" sx={{m:{md:5, xs:3}}}>
        <Typography variant='h5'mb={2} style={{textAlign:'left'}}>Top Movie</Typography>
        {/* card start */}
        <Card sx={{ maxWidth:{xs:170, md:200}, paddingTop:'2%'}} style={{ background:'#BB5AD', border:'0.1px solid rgba(0,0,0,0.3)'}}>
          <CardMedia
            sx={{ height: 130}}
            image="assests/mulan.png"
            title="movieImage"
          />
          <CardContent style={{textAlign:'left', fontSize:'1rem', fontWeight:'10'}}>
            <Typography gutterBottom variant="h6" component="div">
              Movie Title
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontSize:'0.5em'}}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
            />
            </Typography>
          </CardContent>
        </Card>
        <Button size='small' style={{background:'#BE1D1B', float:'right'}}>More</Button>
      </Box>

      {/* movie list */}
      <Box className="new-releases" sx={{m:{md:5, xs:3}}}>
        <Typography variant='h5'mb={2} style={{textAlign:'left'}}>Movie List</Typography>
        {/* card start */}
        <Card sx={{ maxWidth:{xs:170, md:200}, paddingTop:'2%'}} style={{ background:'#BB5AD', border:'0.1px solid rgba(0,0,0,0.3)'}}>
          <CardMedia
            sx={{ height: 130}}
            image="assests/mulan.png"
            title="movieImage"
          />
          <CardContent style={{textAlign:'left', fontSize:'1rem', fontWeight:'10'}}>
            <Typography gutterBottom variant="h6" component="div">
              Movie Title
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontSize:'0.5em'}}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
            />
            </Typography>
          </CardContent>
        </Card>
        <Button size='small' style={{background:'#BE1D1B', float:'right'}}>More</Button>
      </Box>
      {/* Start of footer */}
      <Footer></Footer>
    </Box>
    )
}

export default Home