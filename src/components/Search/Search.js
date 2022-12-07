import React from 'react';
import { CircularProgress, Stack, TextField, Button } from '@mui/material';
import { useSearch } from './hooks/useSearch';
import Form from '../Form/Form';

export default function Search() {

  const { loadingGetCep, onChangeCep, loading, cep, filters } = useSearch();

  return (
    <>
      <Stack sx={{
        marginTop: '10px'
      }}
        direction="row"
        spacing={1}
      >
        <TextField
          id="outlined-basic"
          label="Digite o CEP"
          ariant="filled"
          value={cep}
          onChange={onChangeCep}
        />
        <Button
          variant="contained"
          onClick={loadingGetCep}
        >
          Buscar
        </Button>
        {loading ? <CircularProgress /> : null}
      </Stack>
      <Form filters={filters}/>
    </>
  )
}