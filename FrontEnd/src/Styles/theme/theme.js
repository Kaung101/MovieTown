import { ListItemIcon, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#f1f1f1',
    },
    secondary: {
      main: '#BBB5AD',
    },
    tertiary:{
      main: '#BE1D1B',
    },
    black:'#000',
  },
  components:{
    MuiDrawer:{
      styleOverrides:{
        paper:{
          width:200,
          background:'#000',
          opacity:0.6,
          color: '#fff',
        }
      }
    }
  },
  typography: {
    fontFamily: [
      'Reem Kufi',
      'sans-serif'
    ].join(','),
  },
});

