import { useState, useEffect } from 'react'

export function useFetch(url) {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  setLoading(true)
  fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    //.then((data) => setError("Ocurrio un error"))
    .catch((error)=> setError(error))
    .finally(()=> setLoading(false))
}, []);
  return {data, loading, error}
}