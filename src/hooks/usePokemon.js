import { useState, useEffect } from 'react';

const usePokemon = (url) => {

  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url).then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemones(data.results);
        setLoading(false);
      })
  }, [url])

  return { pokemones, loading}
}

export default usePokemon;