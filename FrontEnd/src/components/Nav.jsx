import { AppBar, Avatar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, alpha, styled, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom';
import '../Styles/css/Nav.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import Axios from '../utils/Axios';
function Nav() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [cookies, setCookies] = useCookies(['userType', 'findWord'] ); 
  const [searchValue, setSearchValue] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [data, setData] = React.useState([]);

  const history = useHistory();
  //get uerType from cookies
  const userType = cookies.userType;
  const [status, setStatus] = useState("Log in");
    //customize header for drawer
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }));
  useEffect(() =>  {
      document.title = "Movie Review Town";
      if(userType != undefined && userType != ''){
        setStatus(userType);
      }else{
        setStatus("Log in");
      }
  }, []);
  //dialog search
  const handleDialogOpen = () =>{
    setOpenDialog(true);
  }
  const closeDialog = () => {
      setOpenDialog(false);
  }
  //for drawer
  const handleDrawer = () => {
    setOpenDrawer(true);
  }
  const closeDrawer = () => {
    setOpenDrawer(false);
  }

  //logout
  const handleLogout = () => {
    setCookies('userType', '');
    history.push('/');
  }
  
  //dialog style 
  const dialogBtn = {
    backgroundColor: theme.palette.tertiary.main,
  }
  //handle search input value
  const handleSearch = () => {
    const findWord = searchValue;
    //set cookies
    setCookies('findWord', findWord);
    //reset search value
    setSearchValue("");
    console.log(findWord);
    
    //redirect to MovieList page with data
    history.push({
      pathname: '/search',
      state: { SearchResult: data }
    });
  }
  
  //handle Nav
  const handleNav = () => {
    if(userType == undefined || userType == ''){
      history.push(`/login`);
    }
    else{
      console.log('Already login');
    }
  }

  //styling dialog box
  const CustomDia = styled(Dialog)(() => ({
    position: 'absolute',
    top: '-30%',
  }) );
  //styling to search bar
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginLeft: theme.spacing(0),
    width: 'auto',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      transition: theme.transitions.create('width'),
      width: '20ch',
    },
  }));

  return (
    <Box>
      {/* navbar  for md and lg*/}
        <AppBar position='sticky' style={{background:theme.palette.secondary.main}}>
            <Container maxWidth="xl">
              <Toolbar>
                {/* MenuIcon for xs screen */}
                <IconButton onClick={handleDrawer} edge="start" color="inherit" aria-label="menu" sx={{ mr:{xs:0}, display:{md:'none'}}}>
                  <MenuIcon />
                </IconButton>
                <Avatar component='a' href='/' className='logo' alt="logo" src="assests/logo.png" sx={{ mr:{xs:0, s:0, lg:1}}}/>
                {/* for space between logo and nav tab */}
                <Box sx={{ flexGrow: 3 }} />
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                    <Typography component='a' href='/'  sx={{ my: 2, mx:5, textDecoration:'none', color: 'black', display: 'block' }} className='NavName' fontFamily="'Reem Kufi', sans-seri">Home</Typography>
                    <Typography component='a' href='/top'  sx={{ my: 2, mx:5, textDecoration:'none', color: 'black', display: 'block' }} className='NavName' fontFamily="'Reem Kufi', sans-seri">Top Movies</Typography>
                    <Typography component='a' href='/newRelease'  sx={{ my: 2, mx:5, textDecoration:'none', color: 'black', display: 'block' }} className='NavName' fontFamily="'Reem Kufi', sans-seri">New Releases</Typography>
                    <Typography component='a' onClick={handleNav}  sx={{ my: 2, mx:5, textDecoration:'none', color: '#BE1D1B', display: 'block' }} className='NavName LoginButton' fontFamily="'Reem Kufi', sans-seri">{status}</Typography>
                </Box>
                {/* Search Button for lg screen */}
                <Search sx={{display:{xs:'none', md:'block'}, px:2}} onClick={handleDialogOpen} >
                  <SearchIconWrapper sx={{ml:18}}>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
                </Search>
                {/* Search Button for sm screen */}
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 , display:{xs:'block', md:'none'}}} onClick={handleDialogOpen}>
                  <SearchIcon />
                </IconButton>
                <IconButton onClick={handleLogout} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 , display:{xs:'block', md:'none'}}}>
                  <LogoutIcon />
                </IconButton>
              </Toolbar>
            </Container>
        </AppBar>
        {/* Dialog for search */}
        <CustomDia open={openDialog} onClose={closeDialog} >
        <DialogContent>
          <DialogContentText fontFamily="'Reem Kufi', sans-seri">
            <Search onClick={handleDialogOpen}>
              <StyledInputBase placeholder="Search…" style={{ cursor: 'text', caretColor:'auto' }} value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}   inputProps={{ 'aria-label': 'search' }} />
              <IconButton color='inherit' aria-label='button' onClick={handleSearch}>
                <SearchIcon/>
              </IconButton>
            </Search>
          </DialogContentText>
        </DialogContent>
      </CustomDia>
      {/* Drawer for sm screen */}
      <Drawer open={openDrawer} onClose={closeDrawer}  sx={{ display:{md:'none'}}}>
        <DrawerHeader>
          <IconButton style={{color:'#fff'}} onClick={closeDrawer} onClose={closeDrawer}> 
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
         <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='/'>
              <ListItemIcon style={{color:'#fff'}}>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='/all'>
              <ListItemIcon style={{color:'#fff'}}>
                <MovieFilterIcon />
              </ListItemIcon>
              <ListItemText primary="Movie Lists" />
            </ListItemButton>
          </ListItem>
         <ListItem disablePadding>
            <ListItemButton onClick={handleNav} component='a' href='/login'>
              <ListItemIcon style={{color:'#fff'}}>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Log in" />
            </ListItemButton>
          </ListItem>
         </List>
    </Drawer>
    </Box>
  )
}

export default Nav