import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, ListItemText } from '@mui/material';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { COLORS, FONTS } from "../constant";
import { Fade } from '@mui/material';
import logo from '../assets/icon.png';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const NavBarBackground = {background: 'white'};
function NavBar() {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path) => {
    setAnchorEl(null);
    if(path){
      navigate(path);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    if(path){
      navigate(path);
    }
  };

  

  return (
    <AppBar position="static" style={NavBarBackground}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ 
            mr: 2, 
            display: { xs: 'none', md: 'flex' },
            color: '#000000', 
            justifyContent: 'center', 
            alignItems:'center'
          }}
        >
          <Button
            href = {"/"}
            sx={{ 
              my: 2, 
              color: '#000000', 
              display: 'flex', 
              flexDirection:'row',
              justifyContent: 'center',
              alignContent: 'center',
              // background:'red'
            }}
          >
          <img src = {logo} width="50px" height="50px"></img>
          <p style={{display: 'flex', color: COLORS.secondary, ...FONTS.h3, alignItems:'center', justifyContent:'center' }}>LOGO SHOT</p>
          </Button>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon style={{color: 'black'}}/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              color:'#000000'
            }}
          >
            <MenuItem key={'找靈感'} onClick={()=>handleCloseNavMenu("/inspiringSearch" )}>
              <Typography textAlign="center">找靈感</Typography>
            </MenuItem>
            <MenuItem key={'找商標'} onClick={handleClick}>
              <Typography textAlign="center">找商標</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, 
            display: { xs: 'flex', md: 'none' }, 
            color:'#000000',
            // justifyContent: 'center',
          }}
        >
          <Button
            href = {"/"}
            sx={{ 
              my: 2, 
              color: '#000000', 
              display: 'flex', 
              flexDirection:'row',
              justifyContent: 'center'
            }}
          >
          <img src = {logo} width="50px" height="50px"></img>
          <p style={{color: COLORS.secondary, ...FONTS.h3 }}>LOGO SHOT</p>
          </Button>
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: '#000000'}}>
          <Button
            key={'找靈感'}
            href="/inspiringSearch"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: COLORS.gray, ...FONTS.h3 }}
          >
            找靈感
          </Button>
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ my: 2, color: COLORS.gray, ...FONTS.h3 }}
          >
            找商標
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={()=>handleClose('/textSearch')}>文字搜尋</MenuItem>
            <MenuItem onClick={()=>handleClose('/imageSearch')}>以圖搜圖</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default NavBar;