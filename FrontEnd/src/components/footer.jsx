import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
function footer() {
    
  return (
    <Grid container sx={{paddingLeft:{sm:0, md:2}}} p={3} mt={15} spacing={2}>
        <Grid xs={3} md={3} item sx={{borderRight:'1px solid #000'}}>
            <Typography variant='body2' component='a' href="/" sx={{textDecoration:'none', color:'#000'}}>Home</Typography>
        </Grid>
        <Grid xs={3} md={3} item sx={{borderRight:'1px solid #000'}}>
            <Typography variant='body2' component='a' href="/" sx={{textDecoration:'none', color:'#000'}}>New Movies</Typography>
        </Grid>
        <Grid xs={3} md={3} item sx={{borderRight:'1px solid #000'}}>
            <Typography variant='body2' component='a' href="/" sx={{textDecoration:'none', color:'#000'}}>Top Movies</Typography>
        </Grid>
        <Grid xs={3} md={3} item>
            <Typography variant='body2' component='a' href="/" sx={{textDecoration:'none', color:'#000'}}>Movie Lists</Typography>
        </Grid>
        <Grid xs={12} item>
            <Typography variant='body2' component='p'>Copyright © Kaung101.  All rights reserved.</Typography>
        </Grid>
    </Grid>
  )
}

export default footer