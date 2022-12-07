import React from 'react';
import { Container, Paper, TextField } from '@mui/material';

export default function Form( { filters } ) {
  
  return (
    <Container sx={{
      flexDirection: 'column',
    }}>
      <Paper sx={{
        flexDirection: 'column',
        marginTop: '40px',
        alignItems: 'space-between',

      }}>
        <TextField sx={{ marginRight: '5px' }} id="outlined-basic" label="Cep" value={filters.cep} variant="outlined" />
        <TextField sx={{ marginRight: '5px' }} id="outlined-basic" label="Rua" value={filters.logradouro} variant="outlined" />
        <TextField sx={{ marginRight: '5px' }} id="outlined-basic" label="Bairro" value={filters.bairro} variant="outlined" />
        <TextField sx={{ marginRight: '5px' }} id="outlined-basic" label="Cidade" value={filters.localidade} variant="outlined" />
        <TextField id="outlined-basic" label="Estado" value={filters.uf} variant="outlined" />
      </Paper>

    </Container>
  );
}