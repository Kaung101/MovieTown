import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import Nav from './Nav'
import Footer from './footer'
function MovieList() {
  return (
    <Box>
        {/* Nav */}
        <Nav></Nav>
        {/* movie list */}
        <Typography variant='h5'my={2}>Movie Lists</Typography>
        <Box className="new-releases" sx={{m:{md:5, xs:3}}}>
          {/* card start */}
          <Card className='card' sx={{ maxWidth:{xs:170, md:200}, paddingTop:'2%'}} style={{ background:'#BB5AD', border:'0.1px solid rgba(0,0,0,0.3)'}}>
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
              {/* rating */}
              <Rating/>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      
        {/* footer */}
        <Box mt={25} mb={0}>
        <Footer></Footer>
        </Box>
    </Box>
  )
}

export default MovieList