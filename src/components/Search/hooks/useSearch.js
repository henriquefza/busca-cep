import { useState } from "react";
import { api } from "../../../services/api";

export function useSearch() {

  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ cep: '', logradouro: '', bairro: '', localidade: '', uf: '' })

  const onChangeCep = (event) => {
    setCep(event.target.value);
  }

  const loadingGetCep = () => {
    setLoading(true);
    setTimeout(
      () => handleGetCep(cep.replace(/\D/g, "")),
      1000
    )
  }

  const handleGetCep = async (cep) => {

    try {
      const response = await api.get(cep + '/json');
      setFilters(response.data);
      setLoading(false);
      setCep("");

    } catch (e) {
      console.error(e);
    }
  }

  return {
    filters,
    cep,
    setCep,
    loading,
    setLoading,
    onChangeCep,
    loadingGetCep,
  };
}