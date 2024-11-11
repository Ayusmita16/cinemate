import { useEffect, useState } from 'react';

export function useFetch(apiPath, queryTerm = "") {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?language=hi-IN&region=IN&api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchMovies();
    }, [url]);

    return { data };
}
