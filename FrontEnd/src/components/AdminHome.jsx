import React from 'react'
import { Box, Grid, Button, Typography, Card, CardContent, CardMedia, Rating} from '@mui/material';
import AdminNav from './AdminNav';
function AdminHome() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
            <AdminNav/>
        </Grid>
        <Grid xs={12} md={2} style={{float:'left'}} m={3}>
          <Button size="small">Add a new Movie</Button>
        </Grid>
        <Grid item xs={12} style={{float:'left'}} m={3}>
          <Typography mb={3} variant='h5'>Movie List</Typography>
          {/* parent box of card */}
          <Grid container spacing={3}>
              <Grid item xs={3}>
              {/* card start */}
              <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} style={{textAlign:'left', backgroundColor:'#D9D9D9', border:'1px solid rgba(0,0,0,0.3)'}}>
                <Box py={2}>
                  <Box>
                    <img src="/assests/mulan.png" alt="mulan" style={{height:80}}/>
                  </Box>
                  <Box width={150}>
                    <Typography variant='body1'>Title</Typography>
                    <Typography variant='body2' sx={{fontSize:10}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, nostrum!</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  <Box>
                    <Button size="small" style={{backgroundColor:'#BE1D1B', color:'#fff'}}>Update</Button>
                  </Box>
                  <Box ml={3}>
                    <Button size="small" style={{backgroundColor:'#BE1D1B', color:'#fff'}}>Delete</Button>
                  </Box>
                </Box>
              </Box>
              {/* card end */}
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      
    </Box>
  )
}

export default AdminHome