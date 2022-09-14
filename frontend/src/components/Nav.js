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
  
  const handleClose = (path) => {
    // setAnchorEl(null);
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
            <MenuItem key={'以圖搜圖'} onClick={()=>handleCloseNavMenu("/imageSearch" )}>
              <Typography textAlign="center">以圖搜圖</Typography>
            </MenuItem>
            <MenuItem key={'文字搜圖'} onClick={()=>handleCloseNavMenu("/textSearch" )}>
              <Typography textAlign="center">文字搜圖</Typography>
            </MenuItem>
            <MenuItem key={'註冊登入'} onClick={()=>handleCloseNavMenu("/login" )}>
              <Typography textAlign="center">註冊登入</Typography>
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
            key={'以圖搜圖'}
            href="/imageSearch"
            onClick={()=>handleClose('/imageSearch')}
            sx={{ my: 2, color: COLORS.gray, ...FONTS.h3 }}
          >
            以圖搜圖
          </Button>
          <Button
            key={'以圖搜圖'}
            href="/textSearch"
            onClick={()=>handleClose('/textSearch')}
            sx={{ my: 2, color: COLORS.gray, ...FONTS.h3 }}
          >
            文字搜尋
          </Button>
          <Button
            key={'註冊登入'}
            onClick={()=>handleClose('/login')}
            sx={{ my: 2, color: COLORS.gray, ...FONTS.h3 }}
          >
            註冊登入
          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default NavBar;