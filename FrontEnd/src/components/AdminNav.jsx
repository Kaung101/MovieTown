import React from 'react'
import '../../src/Styles/css/Login.css'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
function AdminNav() {
  const history = useHistory();
  const [cookies, setCookies] = useCookies(['userType'] ); 
  const handleClick = () => {
    console.log('logout');
    //destory cookie
    setCookies('userType', '');
    history.push('/adminLogin');
  }
  const adminName = cookies.userType;
  return (
    <Box sx={{backgroundColor:'#D9D9D9'}}>
        <Grid container py={3}>
            <Grid item xs={6}>{adminName}</Grid>
            <Grid item xs={6} onClick={handleClick} className='logout'>
              <Button>
                <Typography>Logout</Typography>
              </Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AdminNav