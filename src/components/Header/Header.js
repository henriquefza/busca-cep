import React from 'react';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';

export default function Header () {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography 
          variant="h6" 
          color="inherit" 
          component="div"
        >
          Busca Cep
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
}