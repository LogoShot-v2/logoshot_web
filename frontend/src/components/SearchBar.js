import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box } from '@mui/material';
import { Icon } from '@mui/material';

export default function SearchBar({value, onChange, loading}) {



  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter any text in your trademark"
        inputProps={{ 'aria-label': 'search google maps' }}
        value = {value}
        onChange = {(e)=>onChange(e)}
      />
      
        {
          loading?
          <Icon sx={{display: 'flex', p: '10px', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress color='inherit' style={{display: 'flex', alignSelf: 'center', justifySelf: 'center', width: '20px', height: '20px'}}/>
          </Icon>
          :
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        }
      
    </Paper>
  );
}
