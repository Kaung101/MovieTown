import React from 'react'
import { Box, Grid,TextField, Button, Typography } from '@mui/material'
import AdminNav from './AdminNav'
function AdminUpdate() {
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
                        <TextField  required fullWidth id="title" variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='image' sx={labelStyle}>
                            Image Path
                        </Typography>
                        <TextField  required fullWidth id="image" variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='description' sx={labelStyle}>
                            Description
                        </Typography>
                        <TextField required type="text" fullWidth id="description" variant="outlined"></TextField>
                    </Grid>
                    {/* button */}
                    <Grid item xs={6} md={6}>
                        <Button  size="small" variant="contained" style={buttonRegisterStyle}  >
                            <Typography className='btn' variant="subtitle2" component="label" fontFamily="'Reem Kufi', sans-serif">
                                Update
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{float:'right'}}>
                        <Button  size="small" variant="contained" style={buttonCancelStyle}  >
                            <Typography className='btn' variant="subtitle2" component="label" fontFamily="'Reem Kufi', sans-serif">
                                Cancel
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                </form>
                </Grid>
            </Grid>
        </Box>
  )
}

export default AdminUpdate