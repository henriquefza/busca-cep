import { React, useState } from 'react';
import { CircularProgress, Stack, TextField, Button } from '@mui/material';
import Form from './Form';
import { api } from '../services/api'

export default function Search() {

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ cep: '', logradouro: '', bairro: '', localidade: '', uf: '' });

  function loadingGetCep() {
    setLoading(true);
    setTimeout(
      () => handleGetCep(value),
      1000
    )
  }

  async function handleGetCep(value) {
    
    const response = await api.get(value+'/json')
    setFilters(response.data)
    setValue('');
    setLoading(false);
  }

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
          value={value}
          onChange={event => setValue(event.target.value.replace(/\D/g, ''))}
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