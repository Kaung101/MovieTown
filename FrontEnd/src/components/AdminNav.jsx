import React from 'react'
import { Box, Grid } from '@mui/material'
function AdminNav() {
  return (
    <Box sx={{backgroundColor:'#D9D9D9'}}>
        <Grid container py={3}>
            <Grid item xs={6}>Admin</Grid>
            <Grid item xs={6}>Logout</Grid>
        </Grid>
    </Box>
  )
}

export default AdminNav