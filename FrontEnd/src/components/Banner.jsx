import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/material';
import React from 'react'
import theme from '../Styles/theme/theme';

function Banner() {
    const theme = useTheme();
    const BannerContainer = styled(Box)(() => ({
        display:'flex',
        justifyContent:'center',
        width:'100%',
        padding:'0px 0px',
        boxShadow: '0px 10px 10px 2px rgba(0,0,0,0.2)'
    }));
    const BannerImage = styled('img')((src) => ({
        src:`url(${src})`,
        width:'100%',
    }))
  return (
    <BannerContainer mt={2} sx={{display:{md:'none'}}}>
        <BannerImage src="assests/banner.png"></BannerImage>
    </BannerContainer>
  )
}

export default Banner