import {useState} from "react";

import {Search} from "./search/Search";
import {Cards} from "./cards/Cards";

export const App = () => {
    const [movies, setMovies] = useState([]);
    
    const searchMovies = (query, lang) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=${lang}`)
            .then(r => r.json())
            .then(data => setMovies(data.results))
            .catch(e => console.error(e));
    };
    
    return (
        <main className="App">
            <Search searchMovies={searchMovies}/>
            <Cards movies={movies}/>
        </main>
    );
};

