import { Box, Button, Typography } from '@mui/material'
import Nav from './Nav'
import React from 'react'
import { theme } from '../Styles/theme/theme';
import Footer from "./footer";
function FileNotFound() {
    const dialogBtn = {
        backgroundColor: theme.palette.tertiary.main,
      }
  return (
    <Box>
        <Nav></Nav>
        <Box className="container" mt={18} display={'flex'} flexDirection={'column'}  alignItems={'center'}>
            <Typography variant='h1' p={2}>404</Typography>
            <Typography variant='h6' p={2}>Page Not Found</Typography>
            <Typography variant='h6' p={2}>The page you're looking for does not seem to exist</Typography>
            <Box>
                <Button variant="body2" style={{color:"#fff"}} size='small' sx={dialogBtn} className='btnDialog' p={2}>Home</Button>
            </Box>
        </Box>
        <Box>
            <Footer></Footer>
        </Box>
    </Box>
  )
}

export default FileNotFound